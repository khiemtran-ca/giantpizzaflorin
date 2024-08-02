import React, { useEffect, useState } from 'react';
import BreakLine from './BreakLine';
import MainItemCard from './cards/MainItemCard';
import SideItemCard from './cards/SideItemCard';
import SodaCard from './cards/SodaCard';

const Menu = (props) => {
 
    // Main Items (Pizzas)
    const [pizzas, setPizzas] = useState([])
    const [pizzaItems, setPizzaItems] = useState({})

    // fetch...
    useEffect(() => {
        fetch('http://localhost:3000/mainItems')
            .then(async resp => {
                const data = await resp.json()
                setPizzas(data)
            })
    }, [])

    // Populated main items from array of pizzas
    const mainItemCards = pizzas.map((pizza, pizzaIndex) => {
        return <MainItemCard
            id={pizza._id}
            key={pizzaIndex}
            input={pizzaItems}
            setPizza={setPizzaItems}
            img={pizza.img}
            sizes={pizza.sizes}
            name={pizza.name}
            prices={pizza.prices}
            description={pizza.description}

        />
    })

    // Side Items
    const [sides, setSides] = useState([])
    const [sideItems, setSideItems] = useState({})

    // fetch...
    useEffect(() => {
        fetch('http://localhost:3000/sideItems')
            .then(async resp => {
                const data = await resp.json()
                setSides(data)
            })
    }, [])

    // Populated side item
    const sideItemCards = sides.map((item, sideIndex) => {
        return <SideItemCard
            id={item._id}
            key={sideIndex}
            input={sideItems}
            setSide={setSideItems}
            img={item.img}
            name={item.name}
            price={item.price}
            description={item.description}
        />
    })

    // Sodas
    const [sodas, setSodas] = useState([])
    const [sodaItems, setSodaItems] = useState({})

    // fetch...
    useEffect(() => {
        fetch('http://localhost:3000/sodas')
            .then(async resp => {
                const data = await resp.json()
                setSodas(data)
            })
    }, [])

    // Populated soda
    const sodasCard = sodas.map((soda, sodaIndex) => {
        return <SodaCard
            id={soda._id}
            key={sodaIndex}
            input={sodaItems}
            setSodaItem={setSodaItems}
            name={soda.name}
            price={soda.price}
            img={soda.img}
        />
    })

    return (
        <>
            {/* Use from ref */}
            <form ref={props.itemsForm} id="menuForm">
                <section id="mainMenu">
                    {/* <!-- Main Menu Title --> */}
                    <div className="mainMenuTitle text-center">
                        <p>Main Menu</p>
                    </div>

                    {/* this code for the final project */}
                    {/* <!-- Hidden Topping Detail Box --> */}
                    <div id="toppingBox" className="hidden"></div>

                    <div className="row p-3">
                        {/* Calling item from mainItemCards */}
                        {mainItemCards}
                    </div>
                </section>
                {/* <!--End Main Menu --> */}
                <BreakLine />
                {/* <!--Side Menu--> */}
                <section id="sideMenu">
                    <div className="sideMenuTitle text-center">
                        <p>Side Menu</p>
                    </div>
                    <div className="sideInfo row p-3">
                        {/* Calling item from sideItamCard */}
                        {sideItemCards}
                    </div>
                </section>
                {/* <!--End Side Menu--> */}
                <BreakLine />
                {/* <!--Drink--> */}
                <section id="drink">
                    <div className="sodaTitle mt-3 text-center">
                        <p>Drinks</p>
                    </div>
                    <div className="drinkInfo text-center">
                        {/* Calling sodas from sodasCard */}
                        {sodasCard}
                    </div>
                </section>
                {/* <!--End Drink--> */}
            </form>
        </>
    )
}

export default Menu;