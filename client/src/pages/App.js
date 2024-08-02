import React, { useState, useRef } from 'react';
import Logo from '../components/Logo';
import Header from '../components/Header.js';
import Menu from '../components/Menu.js';
import ClockDate from '../components/ClockDate';
import BreakLine from '../components/BreakLine.js';
import CustomerInfoCard from '../components/cards/CustomerInfoCard';
import Footer from '../components/Footer';

const App = () => {

    const [customer, setCustomer] = useState({});
    const [order, setOrder] = useState([]);
    const [show, setShow] = useState(false);

    // Modal Handle
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Use useRef to store all selected items then pass them down to checkOutModal
    const itemsForm = useRef()

    // Set handleChangeOrder for input adjust value
    const handleChangeOrder = (idx, value) =>{
        value = Number(value)<1? 1 : value
        let price = order[idx].price / Number(order[idx].qty)
        let copyOrder = [... order]
        copyOrder[idx].qty = value
        copyOrder[idx].price = Number(value) * price
        delete copyOrder.grandTotal
        let totalPrice = 0
        copyOrder.forEach(item => {
            totalPrice += item.price
        })
        copyOrder.grandTotal = totalPrice
        setOrder(copyOrder)
    }

    // Set event handle then pass down to CustomerInfoCard
    const handleDelete = (e, index) => {
        e.preventDefault()
        let myOrder = JSON.parse(JSON.stringify(order))
        const newOrder = myOrder.filter((item, idx) => idx !== index)
        newOrder.grandTotal = 0
        newOrder.forEach(item => {
            newOrder.grandTotal += item.price
        })
        setOrder(newOrder)
    }

    // Set up Handle When Customer Select Order
    const handleCustSubmit = (async eve => {
        eve.preventDefault()
        // get all item which customer selected
        const getOrder = [...itemsForm.current.elements].map(item => +item.value ? { "qty": item.value, "id": item.dataset.id, "name": item.dataset.name, "size": item.dataset.size, "price": (item.dataset.price * item.value) ,"req" : item.dataset.price } : null)
        const storeOrder = getOrder.filter(item => item !== null)

        // grandTotal for the Order Confirm (before adjust)
        let grandTotal = 0
        for (let i = 0; i < storeOrder.length; i++) {
            grandTotal += storeOrder[i].price
        }
        storeOrder.grandTotal = grandTotal
        setOrder(storeOrder)
        handleShow()

        let custObj = {}
        let custData = new FormData(eve.target)
        for (let a of custData.entries()) {
            custObj[a[0]] = a[1]
        }
        setCustomer(custObj)
    })

    return (
        <>
            <Logo />
            <main className="container jumbotron jumbotron-fluid bg-dark text-white">
                <Header delete={handleDelete} />
                <BreakLine />
                <Menu itemsForm={itemsForm} />
                <BreakLine />
                <ClockDate />
                <BreakLine />
                <CustomerInfoCard
                    cust={customer}
                    order={order}
                    submitHandler={handleCustSubmit}
                    delete={handleDelete}
                    show={show}
                    handleClose={handleClose}
                    handleChange={handleChangeOrder}
                />
            </main>
            <Footer />
        </>
    )
}

export default App;