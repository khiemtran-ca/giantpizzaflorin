import React, { useState } from 'react';
import Logo from '../../components/Logo';
import Footer1 from '../../components/Footer1';

const AdminLogin = () => {

    const [inputs, setInputs] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        e.preventDefault()
        const key = e.target.name
        const value = e.target.value
        setInputs(values => ({ ...values, [key]: value }));
    }

    const login = async (e) => {
        e.preventDefault();
        // Since React nullifies properties within an event, we must use the 'persist'
        // event to pass along native properties of an element so we can reset the form
        e.persist();

        const resp = await fetch('http://localhost:3000/admin_login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        })
        const data = await resp.json()

        // Store the Token
        window.localStorage.setItem('token', data.token)
        window.location = '/dashboard'
    }

    return (
        <>
            <Logo />
            <div id="adminLoginPage" className='jumbotron holder wrapper text-center'>
                <h1 className='mt-3'>Administration Login Only</h1>
                <form className="form" onSubmit={login}>
                    <h4 className='text-warning fs-3'>User Name</h4>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        name="username"
                        autoComplete="off"
                        required />
                    <h4 className='text-warning fs-3'>Password</h4>
                    <input
                        onChange={handleChange}
                        type="password"
                        className="form-control"
                        name="password"
                        autoComplete="off"
                        required />
                    <button className="btn btn-dark mt-2 mb-2">Login</button>
                </form>
            </div>
            <Footer1 />
        </>
    )
}

export default AdminLogin;