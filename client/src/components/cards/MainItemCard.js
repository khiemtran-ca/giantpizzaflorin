import React from 'react';

const MainItemCard = ({ id, img, sizes, name, description, prices, setPizza, input }) => {

    function handleChange(e) {
        let newItem = {}
        if (input.hasOwnProperty(name)) {
            newItem[name] = { ...input[name], [sizes[e.target.dataset.item]]: e.target.value }
        } else {
            newItem[name] = { [sizes[e.target.dataset.item]]: e.target.value }
        }
        setPizza({ ...input, ...newItem })
    }

    // Set handle description box show/hide when mouse moveover the img
    const handleShowDesc = e => {
        const descriptionBox = document.getElementById('toppingBox')
        descriptionBox.setAttribute('style', `top: ${e.pageY - $('#toppingBox').parent().prop('offsetTop') - 5}px;
        left: ${e.pageX - $('#toppingBox').parent().prop('offsetLeft')}px;
        transform: translate(-50%, -100%)`)
        descriptionBox.classList.remove('hidden')
        descriptionBox.textContent = description
    }
    const handleHideDesc = e => {
        const DescBox = document.getElementById('toppingBox')
        DescBox.classList.add('hidden')
    }

    return (
        <>
            <div className="menu text-center mt-2 mb-2 col col-12 col-sm-4">
                <picture onMouseMove={handleShowDesc} onMouseOut={handleHideDesc}>
                    <img name='0' className="mainImg img-fluid img-thumbnail" src={img} alt="combo" />
                </picture>
                <div className="mainInfo">
                    <p className="itemName">{name}</p>
                    <div className="mainDetail">
                        <label className="mainPrice">{sizes[0]} for ${(prices[0] / 100).toFixed(2)}
                            <input 
                            name="pizza"
                            data-item="0"
                            data-id={id}
                            data-size={sizes[0]}
                            data-name={name}
                            data-price={prices[0]}
                            type="number" 
                            className="inputStyle text-center" 
                            min="0" 
                            value={input.hasOwnProperty(name) && input[name].hasOwnProperty(sizes[0]) ? input[name][sizes[0]] : 0} onChange={handleChange} />
                        </label>
                        <label className="mainPrice">{sizes[1]} for ${(prices[1] / 100).toFixed(2)}
                            <input name="pizza" data-item="1" data-id={id} data-size={sizes[1]} data-name={name} data-price={prices[1]} type="number" className="inputStyle text-center" min="0" value={input.hasOwnProperty(name) && input[name].hasOwnProperty(sizes[1]) ? input[name][sizes[1]] : 0} onChange={handleChange} />
                        </label >
                        <label className="mainPrice">{sizes[2]} for ${(prices[2] / 100).toFixed(2)}
                            <input name="pizza" data-item="2" data-id={id} data-size={sizes[2]} data-name={name} data-price={prices[2]} type="number" className="inputStyle text-center" min="0" value={input.hasOwnProperty(name) && input[name].hasOwnProperty(sizes[2]) ? input[name][sizes[2]] : 0} onChange={handleChange} />
                        </label>
                        <div />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainItemCard;