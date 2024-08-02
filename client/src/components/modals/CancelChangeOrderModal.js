import React from "react";
import { Modal } from "react-bootstrap";
import BreakLine from "../BreakLine";
import LoadItemOrdered from '../LoadItemOrdered'
import CancelOrderModal from './CancelOrderModal';
import ChangeOrderModal from './ChangeOrderModal';

function CancelChangeOrder(props) {
    // Create loadItemOrdered to recall all the itmes ordered
    const loadItemOrdered = props.data.order.map((item, idx) => <LoadItemOrdered key={idx} {...item} index={idx} handleChange={props.handleChangeOrder} onDelete={props.deleteItem} />)

    return (
        <>
            <Modal.Title className="fs-1 fw-bold text-center">
                <span className="text-danger">Cancel</span> Or <span className="text-warning">Change</span> Your Order
                <p className="text-primary fw-bolder">Welcome Back {props.data.customerName}!!!</p>
            </Modal.Title>

            <BreakLine />

            <Modal.Body>
                <div id="recallOrder" className="modal-body">

                    <div className="top fs-4 text-secondary text-center">
                        <p>Address: {props.data.address}</p>
                        <p>Phone: {props.data.phone}</p>
                        <p>Date Order: {props.data.date}</p>
                        <p>Grand Total: <span className="text-warning">${(props.data.grandTotal).toFixed(2)}</span></p>
                    </div>

                    <div id="recallOrderTable" className="bottom">
                        <p className="yourOrder text-center fs-2">Your Ordered</p>
                        <table className="table table-lg text-center">
                            <thead>
                                <tr className="tableTitle text-primary text-center fs-3">
                                    <th scope="col">Qty</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            {/* Recall all items ordered */}
                            <tbody className="loadItemOrdered">
                                {loadItemOrdered}
                            </tbody>
                        </table>
                    </div>

                </div>

            </Modal.Body>

            <BreakLine />

            < Modal.Footer >
                <div className="notice text-center">
                    <p><span className="text-danger text-center mt-2 fw-bolder fs-5 text-decoration-underline">Notice:</span> If you paid Credit Card the money will refund back to your card <span className="text-danger fw-italic ">($5 Cancellation fee may apply)</span></p>
                </div>
                <div className="cancelAndChangeBtn mr-1">
                    <CancelOrderModal data={props.data} />
                </div>
                <div className="cancelAndChangeBtn ml-1">
                    <ChangeOrderModal data={props.data} />
                </div>
            </Modal.Footer >
        </>
    );
}
export default CancelChangeOrder;