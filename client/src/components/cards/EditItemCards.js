import React, { useState } from 'react';
import { Card  } from 'react-bootstrap';
import deepcopy from '../../functions/deepcopy';

// Edit Pizzas
const EditPizza = (props) => {

    const [textarea, setTextarea] = useState({...props});
    function handleChange (e) {
        e.preventDefault()
        let newValue = { ...textarea }
        newValue[e.target.name] = e.target.value
        setTextarea({ ...newValue});
    }

    const updateDb = async (e) => {
        e.preventDefault()

        // Set the prices and sizes back to array
        const temp = deepcopy(textarea)
        if (!Array.isArray(temp.prices)) {
            let priceArr = temp.prices.split(',')
            temp.prices = priceArr.map(item => Number(item))
        }

        if (!Array.isArray(temp.sizes)) {
            temp.sizes = temp.sizes.split(',')
        }
        
        // Fetch
        const resp = await fetch(`http://localhost:3000/updateDb/${props._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({type: 'pizza', textArea: temp})
        })
        const data = await resp.json()
        alert(data.message)
        location = '/dashboard'
    }

    return (
        <Card className="editPizza text-center">
            <form >
                <div>
                    <p>Name</p>
                    <textarea 
                    name="name"
                    type="text"
                    rows="1" 
                    cols="20" 
                    value={textarea.name} 
                    onChange={handleChange}
                    autoComplete="on" />
                    <p>Description</p>
                    <textarea name="description" rows="4" cols="30" value={textarea.description} onChange={handleChange}
                    autoComplete="on" />
                    <p>$ Prices</p>
                    <textarea 
                    name="prices" 
                    rows="1" cols="15" 
                    value={textarea.prices} 
                    onChange={handleChange}
                    autoComplete="on" />
                    <p>Sizes</p>
                    <textarea 
                    name="sizes" 
                    rows="1" cols="30" 
                    value={textarea.sizes} 
                    onChange={handleChange}
                    autoComplete="on" />
                </div>
                <div>
                    <button 
                    className="updateBtn btn btn-success mb-2" type="submit"
                    onClick={updateDb}>Update</button>
                </div>
            </form>
        </Card>
    )
}

// Edit Side Items
const EditSideItem = (props) => {

    const [textarea, setTextarea] = useState({...props});
    function handleChange (e) {
        e.preventDefault()
        let newValue = { ...textarea }
        newValue[e.target.name] = e.target.value
        setTextarea({ ...newValue});
    }

    const updateDb = async (e) => {
        e.preventDefault()
        textarea.price = Number(textarea.price)
        const resp = await fetch(`http://localhost:3000/updateDb/${props._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({type: 'side', textArea: textarea})
        })
        const data = await resp.json()
        alert(data.message)
        location = '/dashboard'
    }

    return (
        <Card className="editSide text-center">
            <form>
                <div>
                    <p>Name</p>
                    <textarea
                    name="name"
                    rows="1" cols="20"
                    value={textarea.name}
                    onChange={handleChange}
                    autoComplete="on" />
                    <p>Description</p>
                    <textarea 
                    name="description" 
                    rows="4" cols="30" 
                    value={textarea.description}
                    onChange={handleChange}
                    autoComplete="on" />
                    <p>$ Prices</p>
                    <textarea 
                    name="price" 
                    rows="1" 
                    cols="5" 
                    value={textarea.price}
                    onChange={handleChange}
                    autoComplete="on" />
                </div>
                <div>
                    <button 
                    className="updateBtn btn btn-success mb-2" 
                    type="submit"
                    onClick={updateDb}
                    >Update</button>
                </div>
            </form>
        </Card>
    )
}

// Edit Sodas
const EditSoda = (props) => {

    const [textarea, setTextarea] = useState({...props});
    function handleChange (e) {
        e.preventDefault()
        let newValue = { ...textarea }
        newValue[e.target.name] = e.target.value
        setTextarea({ ...newValue});
    }

    const updateDb = async (e) => {
        e.preventDefault()
        const resp = await fetch(`http://localhost:3000/updateDb/${props._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({type: 'soda', textArea: textarea})
        })
        const data = await resp.json()
        alert(data.message)
        location = '/dashboard'
    }

    return (
        <Card className="editSoda text-center">
            <form>
                <div>
                    <p>Name</p>
                    <textarea 
                    name="name" 
                    rows="1" 
                    cols="20" 
                    value={textarea.name}
                    onChange={handleChange}
                    autoComplete="on" />
                    <p>$ Prices</p>
                    <textarea 
                    name="price" 
                    rows="1" 
                    cols="5" 
                    value={textarea.price}
                    onChange={handleChange}
                    autoComplete="on" />
                </div>
                <div>
                    <button className="updateBtn btn btn-success mb-2" type="submit"
                    onClick={updateDb}
                    >Update</button>
                </div>
            </form>
        </Card>
    )
}

export {
    EditPizza,
    EditSideItem,
    EditSoda
}