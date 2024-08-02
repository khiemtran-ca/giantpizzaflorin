import React, { useState, useEffect } from 'react';
import Logo from '../../components/Logo';
import { Button } from 'react-bootstrap';
import CustomersInfo from '../../components/admin/CustomersInfo';
import AdminMenus from '../../components/admin/AdminMenus';
import Footer1 from '../../components/Footer1';

const DashBoard = () => {

    const [admin, setAdmin] = useState(false)
    const [AdminMenu, setAdminMenu] = useState({})
    const [CustomerInfo, setCustomerInfo] = useState([])
    const [component, setComponent] = useState(false)

    // function to check the Token
    useEffect(() => {
        async function checkToken() {
            const token = localStorage.getItem('token')
            const resp = await fetch(`http://localhost:3000/check_token`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await resp.json()

            if (data.success) {
                setAdmin(true)
            }
        }
        checkToken()
    }, [])

    // handleClick on customers, menus, report and logout
    const handleClick = async (e) => {
        e.preventDefault()
        if (e.target.id === "menus") {
            const resp = await fetch('http://localhost:3000/get_menus_database')
            const data = await resp.json()
            // console.log('data here:', data)
            setAdminMenu(data)
            setComponent(e.target.id)

        } else if (e.target.id === "report") {
            alert("I will be there!!! when I have time I will finish this with MySQL")

        } else if (e.target.id === "logout") {
            localStorage.removeItem('token');
            window.location = '/adminLogin'

        } else {
            const resp = await fetch('http://localhost:3000/get_customers')
            const data = await resp.json()
            setCustomerInfo(data)
            setComponent(e.target.id)
        }
    }

    if (admin) {
        return (
            <>
                <div id="dashBoard" className="logo">
                    <Logo />
                    <div className='adminNav text-center'>
                        <h1 className='fw-bolder'>Welcome Tran !</h1>
                        <nav className="navbar sticky-top justify-content-center">
                            <div className="link">
                                <Button
                                    className="btn btn-outline-warning bg-dark font-weight-bold mr-2 mb-2"
                                    role="button"
                                    id="CustomersInfo"
                                    aria-pressed="true"
                                    onClick={handleClick}
                                >Customer Info
                                </Button>
                                <Button
                                    className="btn btn-outline-warning bg-dark font-weight-bold mr-2 mb-2"
                                    role="button"
                                    id="menus"
                                    aria-pressed="true"
                                    onClick={handleClick}
                                >Menu
                                </Button>
                                <Button
                                    className="btn btn-outline-warning bg-dark font-weight-bold mr-2 mb-2"
                                    role="button"
                                    id="report"
                                    aria-pressed="true"
                                    onClick={handleClick}
                                >Report
                                </Button>
                                <Button
                                    className="btn btn-outline-danger bg-dark font-weight-bold mr-2 mb-2"
                                    role="button"
                                    id="logout"
                                    aria-pressed="true"
                                    onClick={handleClick}
                                >Logout
                                </Button>
                            </div>
                        </nav>
                    </div>

                    {component === 'menus' ?
                        <AdminMenus AdminMenus={AdminMenu} /> : null}

                    {component === 'CustomersInfo' ? <CustomersInfo CustomersInfo={CustomerInfo} /> : null}
                </div>
                <Footer1 />
            </>
        )
    } else {
        return (
            <>
                <div className="hacking text-center text-warning">
                    <h1>Nothing Found at {window.location.pathname}</h1>
                    <h1>🛑Hacking is a CRIME 🛑</h1>
                    <p className="fs-1">🛑Hacking is a CRIME 🛑</p>
                    <p className="fs-2">🛑Hacking is a CRIME 🛑</p>
                    <p className="fs-3">🛑Hacking is a CRIME 🛑</p>
                    <p className="fs-4">🛑Hacking is a CRIME 🛑</p>
                    <p className="fs-4">🛑Hacking is a CRIME 🛑</p>
                    <p className="fs-3">🛑Hacking is a CRIME 🛑</p>
                    <p className="fs-2">🛑Hacking is a CRIME 🛑</p>
                    <p className="fs-1">🛑Hacking is a CRIME 🛑</p>
                    <h1>🛑Hacking is a CRIME 🛑</h1>
                </div>
                <Footer1 />
            </>
        )
    }
}

export default DashBoard;