import React from 'react';

const SideItemCard = ({ id, img, name, description, price, setSide, input }) => {
    
    function handleChange(e) {
        let newSideItem = { ...input }
        newSideItem[name] = e.target.value
        setSide({ ...newSideItem })
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
        <div className="menu text-center mt-2 mb-2 col-12 col col-xs-6 col-sm-3">
            <picture onMouseMove={handleShowDesc} onMouseOut={handleHideDesc}>
                <img className="sideImg img-fluid img-thumbnail" src={img} alt="salad" />
            </picture>
            <div className="sideInfo">
                <p className="itemName">{name}</p>
                <div className="sideDetail">
                    <label className="sidePrice">${(price / 100).toFixed(2)}
                        <input 
                        name="sideItem" 
                        data-item="0" 
                        data-id={id} 
                        data-name={name} 
                        type="number"
                        data-price={price}
                        className="inputStyle text-center"min="0" 
                        value={input.hasOwnProperty(name) ? input[name] : 0} 
                        onChange={handleChange} />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default SideItemCard;