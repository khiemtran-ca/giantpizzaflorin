import { Button, Accordion, Card } from "react-bootstrap";
import LoadItemOrdered from '../LoadItemOrdered';

const CustomersInfo = (props) => {

    const customersInfo = props.CustomersInfo.map(item => {

        const loadItemOrdered = item.order.map((item, idx) => <LoadItemOrdered key={idx} admin={true} {...item} index={idx} />)

        return (

            <div key={item._id} className='col-12 col-sm-4'>

                <Accordion className="row">
                    <Card className="col">
                        <Card.Header>
                            <Accordion.Toggle className="cstInfoCard" as={Button} variant="link" eventKey="0">
                                <p>Customer Name: <span className='cstInfoCard fw-bolder text-danger'>{item.customerName}</span></p>
                                <p>{item.phone}</p>
                                <p className="itemOrderDate text-dark" style={{'fontSize': '20px'}}>{item.date}</p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div className="top fs-4 text-secondary">
                                    <p>Customer Name: {item.customerName}</p>
                                    <p>Address: {item.address}</p>
                                    <p>Phone: {item.phone}</p>
                                    <p>Date Order: {item.date}</p>
                                    <p>Time Order: {item.time}</p>
                                    <p>Grand Total: <span className="text-warning">${(item.grandTotal).toFixed(2)}</span></p>
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
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

            </div >
        )
    })

    return (
        <div id="custInfo" className='row pb-5 px-4'>
            {customersInfo}
        </div>

    )
}

export default CustomersInfo