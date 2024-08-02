import React, { useState } from "react";
import { Modal, Button, Jumbotron } from "react-bootstrap";
import LoadItemOrdered from "../LoadItemOrdered";
import LoadCustomerInfo from "../LoadCustomerInfo";
import BreakLine from "../BreakLine";

function CheckOutModal({ order, cust, deleteItem, show, handleClose, handleChange }) {
    const [displayThankYouModal, setDisplayThankYouModal] = useState(false)

    const handleConfirm = () => {
        // Send order/cust/grandTotal info to customers db collection 
        fetch("http://localhost:3000/customers", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cust,
                order,
                grandTotal: order.grandTotal
            })
        });

        // Display (Thank You message) and (close) to reset the page after click confirm button
        setDisplayThankYouModal(
            <>
                <Modal.Body>
                    <Jumbotron fluid id="thankYouMessage" className="text-primary text-center fs-1 fw-bolder p-1" >
                        <p className="text-warning">Thank You {cust.customerName} !!!</p>
                        <p className="fs-2 text-secondary">Your Order Will Be Ready</p>
                        <div className="fs-3 mt-2 mb-2">
                            <p>45 Minutes @ Your Door</p>
                            <p>Or</p>
                            <p>15 Minutes @ The Store</p>
                        </div>
                        <p className="text-secondary fs-5">(Please Use Your Confimation/Phone # <span className="text-danger">{cust.phone}</span> For Cancellation)</p>
                        <Button variant="outline-danger" onClick={() => {
                            location = '/'
                        }}>Close</Button>
                    </Jumbotron>
                </Modal.Body>
            </>
        )

    }

    // loadItemOrdered then pass down to  Modal Body <tbody className="loadItemOrdered">
    let loadItemOrdered
    if (order) {
        loadItemOrdered = order.map((item, idx) => <LoadItemOrdered key={idx} {...item} index={idx} onDelete={deleteItem} handleChange={handleChange} />)
    }

    // Return Check Out Modal Body
    return (
        <>
            <Button variant="outline-primary" size="lg" className="fw-bolder mb-4" type="submit">Check Out</Button>

            <Modal size='lg' show={show} onHide={handleClose}>

                {displayThankYouModal ? displayThankYouModal :

                    <>
                        <Modal.Header className="checkOutHeader">
                            <Modal.Title className="text-center fs-1 fw-bold">Order Confirm</Modal.Title>
                        </Modal.Header>

                        <BreakLine />

                        <Modal.Body>
                            <div id="orderDetail" className="modal-body">
                                <div className="topSide">
                                    <p className="text-primary text-center fw-bolder fs-2">Your Order</p>

                                    <div id="showOrder" className="text-center">

                                        {order.length ?
                                            // if ordered then show this table
                                            <table className="table table-lg text-center table-border">
                                                <thead>
                                                    <tr className="text-primary fs-5">
                                                        <th scope="col">Qty</th>
                                                        <th scope="col">Size</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Price</th>
                                                    </tr>
                                                </thead>
                                                {/* load all items ordered */}
                                                <tbody className="loadItemOrdered">
                                                    {loadItemOrdered}
                                                </tbody>
                                            </table>
                                            :
                                            // if not ordered then show this message
                                            <>
                                                <div id="messageAlert" className="text-danger fs-2 fw-bolder">
                                                    <p>You Have Not Selected Any Items</p>
                                                    <p>Please Place an Order</p>
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>

                                {/* Grand Total before adjust */}
                                {order.length ?
                                    <div className="grandTotal" style={{ marginLeft: '360px', marginTop: '10px', marginBottom: '10px' }}>
                                        <p className="text-warning fs-4">Your Grand Total: <span id="totalAmount" className="text-info">${(order.grandTotal / 100).toFixed(2)}</span></p>
                                        <p className="text-danger text-center">(Taxes Included)</p>
                                    </div>
                                    : null}

                                {/* load all customer information */}
                                <div className="loadCustInfo">
                                    {cust ? <LoadCustomerInfo {...cust} grandTotal={order.grandTotal} /> : null}
                                </div>

                            </div>
                        </Modal.Body>

                        <BreakLine />

                        <Modal.Footer>
                            <Button variant="outline-dark" onClick={handleClose}>Back</Button>

                            {order.length ?
                                /* if not ordered do not show this button */
                                <Button variant="outline-primary" onClick={handleConfirm}>Confirm</Button>
                                : null}

                        </Modal.Footer>
                    </>
                }

            </Modal>

        </>
    );
}

export default CheckOutModal;