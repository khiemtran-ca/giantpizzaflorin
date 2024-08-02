import React from 'react';

// Load all customer information
const LoadCustomerInfo = (props) => {
    return (
        <>
            <div className="bottomSide text-center text-warning mt-3 fs-3" >
                <p className="yourName">Your Name: <span id="customerName">{props.customerName}</span></p>
                <p className="confirmNumber">Confirmation #: <span id="confirm">{props.phone}</span></p>
                <p className="date">Delivery on: <span id="dateDeli" className="text-primary">{new Date(props.date).toDateString()}</span> @ <span id="timeDeli" className="text-primary">{props.time}</span></p>
            </div>
        </>
    )
}

export default LoadCustomerInfo;