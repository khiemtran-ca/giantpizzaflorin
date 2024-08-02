import { Button, Accordion, Card } from "react-bootstrap";
import { EditPizza, EditSideItem, EditSoda } from '../cards/EditItemCards';

const AdminMenus = (props) => {

    // Recall all pizzas from db
    const pizzas = props.AdminMenus.pizzas.map(item => {
        return (

                <Accordion key={item._id} className="row">
                    <Card id="mainAdminMenu" className="col">
                        <Card.Header>
                            <Accordion.Toggle className="menusCard" as={Button} variant="link" eventKey="0">
                                <p>{item.name}</p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <EditPizza {...item} />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
        )
    })

    // Recall all side menu from db
    const sides = props.AdminMenus.sides.map(item => {
        return (
           
                <Accordion key={item._id} className="row">
                    <Card id="mainAdminMenu" className="col">
                        <Card.Header>
                            <Accordion.Toggle className="menusCard" as={Button} variant="link" eventKey="0">
                                <p>{item.name}</p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <EditSideItem {...item} />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
 
        )
    })

    // Recall sodas from db
    const sodas = props.AdminMenus.sodas.map(item => {
        return (
     
                <Accordion key={item._id} className="row">
                    <Card id="mainAdminMenu" className="col">
                        <Card.Header>
                            <Accordion.Toggle className="menusCard" as={Button} variant="link" eventKey="0">
                                <p>{item.name}</p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <EditSoda {...item} />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
          
        )
    })

    return (
              <div id="adminMenus" className="text-center pb-5 px-5">
                <div id="adminPizzaMenus" className="mainMenuTitle text-center">
                    <p>Main Menu</p>
                </div >
                {pizzas}
                <div id="adminSideMenus" className='sideMenuTitle text-center mt-3'>
                    <p>Side Menu</p>
                </div >
                {sides}
                <div id="adminSideMenus" className='sodaTitle text-center mt-3'>
                    <p>Drinks</p>
                </div >
                {sodas}
            </div>
    )
}

export default AdminMenus