import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import BreakLine from "../BreakLine";

function CancelOrderModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cancelOrder = async () => {
        const resp = await fetch(`http://localhost:3000/deleteOrder/${props.data._id}`, {
            method: 'DELETE'
        })
        location = '/'
        const data = await resp.json()
        alert(data.message)
    }

    return (
        <>
            <Button type="submit" variant="outline-danger" className="mb-2"
                onClick={handleShow}>Cancel Order
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Title className="text-danger text-center fs-1 fw-bold">Cancel Order
                    </Modal.Title>

                <BreakLine />

                <Modal.Body>
                    <div id="cancleOrder" className="text-center fs-1 text-secondary">
                        <span className="text-primary fw-bolder">{props.data.customerName}</span>!!!
                        <p>Are You Sure You Want to Cancel Your Order?</p>
                    </div>

                    <div className="text-center fs-2 fw-bolder">
                        <p>Thank You Come Again !!!</p>
                    </div>
                </Modal.Body>

                <BreakLine />

                <Modal.Footer>
                    <div className="text-center">
                        <p><span className="text-danger text-center mt-2 fw-bolder fs-5 text-decoration-underline">Notice:</span> If you paid Credit Card the money will refund back to your card <span className="text-danger fw-italic ">($5 Cancellation fee may apply)</span></p>
                    </div>

                    <Button variant="outline-danger" onClick={cancelOrder}>Yes</Button>
                    <Button variant="primary" onClick={handleClose}>
                        No </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}
export default CancelOrderModal;