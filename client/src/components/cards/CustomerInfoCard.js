import React, { useState, useRef } from 'react';
import CheckOutModal from '../modals/CheckOutModal';
import CreditInputCard from './CreditInputCard';
import { minDateString, maxDateString } from '../../functions/setDateFunctions';

const CustomerInfoCard = (props) => {

    // creditcard input
    const [credit, setCredit] = useState(false)

    // Set up on the hour delivery time using useRef
    const deliveryTime = useRef(null)
    const handleOnChange = (e) => {
        let str = deliveryTime.current.value
        str = str.slice(0, 3)
        deliveryTime.current.value = str + "00";
    }

    return (
        <>
            {/* <!--Customer Information--> */}
            <section id="customerAddress">
                <form className="infoFillOut mt-2" onSubmit={props.submitHandler}>
                    <p className="fillOut text-warning mb-3  ">Delivery Fill Out</p>
                    <p className="text-danger mb-3  ">(On the Hour Delivery 1100-2200)</p>
                    <input id="yourName" type="text" placeholder="Your Name" required name="customerName"
                        className="holder text-center text-black-50" autoComplete="on" style={{ "textTransform": "capitalize" }} />
                    <input id="address" type="text" placeholder="Address" required name="address"
                        className="holder text-center text-black-50" autoComplete="on" style={{ "textTransform": "capitalize" }} />
                    <input id="phone" title="It Should Be: 1234567890" type="tel" name="phone" placeholder="Phone Number"
                        minLength="1" maxLength="10" required className="holder text-center text-black-50" autoComplete="off" />
                    <input id="date" name="date" type="date" placeholder="Delivery Day" min={minDateString()} max={maxDateString()} required
                        className="holder text-center text-black-50" autoComplete="on" />
                    <input id="deliTime" name="time" type="time" placeholder="Delivery 1100 to 2200" required
                        className="holder text-center text-black-50" min="11:00:00" max="22:00:00" autoComplete="on" ref={deliveryTime} onChange={handleOnChange} />
                    <div className="d-flex align-items-center">
                        <input defaultChecked className="" type="radio" id="cash" name="cashCredit" value="cash" onClick={() => setCredit(false)} />
                        <label className="p-2 fs-1" htmlFor="cash">💵</label>
                        <input className="" type="radio" id="creditCard" name="cashCredit" value="creditCard" onClick={() => setCredit(true)} />
                        <label className="p-2 fs-1" htmlFor="creditCard">💳</label>
                    </div>

                    {/* creditcard input */}
                    {credit ? <CreditInputCard /> : null}

                    <CheckOutModal
                        cust={props.cust}
                        order={props.order}
                        show={props.show}
                        handleClose={props.handleClose}
                        deleteItem={props.delete}
                        handleChange={props.handleChange}
                    />
                </form>

            </section>
            {/* <!--End Customer Information--> */}
        </>
    )
}
export default CustomerInfoCard;