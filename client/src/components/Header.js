import React from 'react';
import CustomerLoginModal from './modals/CustomerLoginModal';

const Header = (props) => {
    return (
        <React.Fragment>
            <header>
                <div id="freeDelivery">
                    <p className="freeDeli text-center mt-5">Free Delivery</p>
                </div>
                <div id="intro" className="text-center mt-2 mb-2">
                    <p>Do you want </p>
                    <p>a Giant Pizza</p>
                    <p>for your awsome party?</p>
                    <p>Please Call <span className="text-primary"> ☎ </span>
                        for <span className="car">🚗</span> :</p>
                    <p><span className="font-weight-bold text-primary">(916) 666-6666</span></p>
                    <p>For Pick Up</p>
                    <p>6666 Florin Rd</p>
                    <p>Sacramento, CA 95828</p>
                    <div id="cancelText" className="mt-2 text-center">
                        <p className="text-warning"><span className="text-danger">Change</span> or <span className="text-danger">Cancel</span> Your Order Please</p>
                        <CustomerLoginModal deleteItem={props.delete}/>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;