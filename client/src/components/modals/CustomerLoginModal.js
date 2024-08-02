import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import BreakLine from "../BreakLine";
import CancelChangeOrder from './CancelChangeOrderModal';

function CustomerLoginModal(props) {
    const [display, setDisplay] = useState(false)

    // Set handleChangeOrder for the input to adjust value, totalprice, newGrandTotal
    const handleChangeOrder = (idx, value) => {
        value = Number(value) < 1 ? 1 : value
        let price = display.order[idx].price / Number(display.order[idx].qty)
        let copyOrder = [...display.order]
        copyOrder[idx].qty = value
        copyOrder[idx].price = Number(value) * price
        delete copyOrder.grandTotal
        let totalPrice = 0
        copyOrder.forEach(item => {
            totalPrice += item.price
        })
        copyOrder.grandTotal = totalPrice

        // set newGrandTotal
        let newGrandTotal = 0;
        copyOrder.forEach(item => {
            newGrandTotal += item.price
        })

        setDisplay({ ...display, grandTotal: Number(newGrandTotal / 100), newGrandTotal: Number(newGrandTotal), order: copyOrder })
    }

    // set handleDelete each Item
    const handleDelete = (e, idx) => {

        let temp = JSON.parse(JSON.stringify(display.order))
        temp.splice(idx, 1)
        // Set newGrandTotal
        let newGrandTotal = 0;
        temp.forEach(item => {
            newGrandTotal += (item.price)
        })
        setDisplay({ ...display, grandTotal: Number(newGrandTotal / 100), newGrandTotal: Number(newGrandTotal), order: temp })
    }

    const handleLogin = async () => {
        // recall customer from db
        const phone = document.getElementById('phoneNum').value
        const name = document.getElementById('custName').value

        if (!phone || !name) {
            alert('Please Enter Your Name and Phone#(Confirmation#)')
            return
        }

        const resp = await fetch(`http://localhost:3000/login/${name}/${phone}`)
        const data = await resp.json()

        if (data.message) alert(data.message)
        else setDisplay(data)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setDisplay(false)
        setShow(false)
    };

    const handleShow = () => setShow(true);

    return (
        <>
            <Button type="submit" variant="outline-danger" size="lg" className="mb-2"
                onClick={handleShow}>Click Here
            </Button>

            <Modal size={display ? 'lg' : 'md'} className='p-0' show={show} onHide={handleClose}>

                {display ? <CancelChangeOrder handleClose={handleClose} data={display} deleteItem={handleDelete} handleChangeOrder={handleChangeOrder} /> :

                    <>
                        <Modal.Title className="text-primary fs-1 fw-bold text-center">
                            Customer Login
                        </Modal.Title>

                        <BreakLine />

                        <Modal.Body>
                            <div id="orderDetail" className="modal-body text-center">
                                <p>Enter Your Name</p>
                                <input id="custName" title="Your Name Here" type="text" name="name" placeholder="Here" required className="holder text-center text-black-50 mb-3" autoComplete="on" style={{ "textTransform": "capitalize" }}></input>
                                <p>Enter Your Confirmation/Phone Number</p>
                                <input id="phoneNum" title="It Should Be: 1234567890" type="text" name="phone" placeholder="Here" required className="holder text-center text-black-50 mb-3" maxLength="10" autoComplete="on"></input>
                            </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <div className="text-center">
                                <p><span className="text-danger text-center mt-2 fw-bolder fs-5 text-decoration-underline">Notice:</span> If you paid Credit Card the money will refund back to your card <span className="text-danger fw-italic ">($5 Cancellation fee may apply)</span></p>
                            </div>
                            <BreakLine />

                            <Button variant="secondary" onClick={handleClose}>
                                Exit </Button>
                            <Button variant="primary" onClick={handleLogin}>
                                Login </Button>
                        </Modal.Footer>
                    </>

                }
            </Modal>

        </>
    );
}
export default CustomerLoginModal;