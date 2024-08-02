import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import BreakLine from "../BreakLine";

function ChangeOrderModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const newOrder = async (e) => {
        e.preventDefault()
        const resp = await fetch(`http://localhost:3000/newOrder/${props.data._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(props.data)
        })
        const data = await resp.json()
        alert(data.message)
        location = '/'
    }

    return (
        <>
            <Button type="submit" variant="outline-warning" className="mb-2"
                onClick={handleShow}>Change Order
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Title className="text-primary text-center fs-1 fw-bold">
                    Change Order
                </Modal.Title>

                <BreakLine />

                <Modal.Body>
                    <div id="changeOrder" className="modal-body text-center fs-1 text-warning">
                        <p className="text-secondary"><span className="text-primary fw-bolder">{props.data.customerName}</span>!!! Please Click Confirm to Change Your Order</p>
                    </div>
                    <div className="text-center fs-2 fw-bolder">
                        <p>Thank You Come Again !!!</p>
                    </div>
                </Modal.Body>

                <BreakLine />

                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Exit </Button>
                    <Button variant="primary" onClick={newOrder}>Confirm</Button>
                </Modal.Footer>

            </Modal>

        </>
    );
}
export default ChangeOrderModal;