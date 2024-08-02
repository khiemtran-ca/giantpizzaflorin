    import React from 'react';

const SodaCard = ({ id, name, price, setSodaItem, input }) => {
    function handleChange(e) {
        let newSodaItem = { ...input }
        newSodaItem[name] = e.target.value
        setSodaItem({ ...newSodaItem })
    }
    return (
        <>
            <div className="sodaInfo text-center">
                <p className="sodaName">{name}</p>
                <label className="sodaPrice">${(price / 100).toFixed(2)}
                    <input name="soda" data-item="0" data-id={id} data-name={name} data-price={price} type="number" className="inputStyle text-center" min="0" value={input.hasOwnProperty(name) ? input[name] : 0} onChange={handleChange} />
                </label>
            </div>
        </>
    )
}

export default SodaCard;