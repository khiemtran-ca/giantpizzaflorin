import React from 'react';

const CreditInputCard = () => {

    return (
        <>
            <div className="purchaser">
                <p className="text-info">Purchaser Name </p>
                <input id="purchaserName" type="text" placeholder="" size="30" name="purchaserName"
                    style={{ "textTransform": "capitalize" }} className="text-center" required />
                <p className="text-info">Purchaser Address </p>
                <input id="purchaserAddress" type="text" placeholder="" size="25" name="purchaserAddress"
                    className="text-center" required />
                <p className="text-info">City </p>
                <input size="22" name="City" style={{ "textTransform": "capitalize" }} className="text-center" required />
                <p className="text-info mt-1"><span>State </span> <input size="3" name="State"
                    style={{ "textTransform": "capitalize" }} maxLength="2" className="text-center" />
                    <span className="text-info">Zip Code </span><input size="5" maxLength="5" name="Zipcode" className="text-center" required />
                </p>
                <p className="text-info mt-3">Card Number </p>
                <input id="credit-card" name="credit-card-number" type="text" placeholder="xxxx-xxxx-xxxx-xxxx" required autoCapitalize="off" autoCorrect="off" maxLength="16" className="text-center" />
                <input type="text" placeholder="Exp Date" name="card-exp" id="credit-exp"
                    size="10" maxLength="10" className="text-center" required />
            </div>
        </>
    )
}

export default CreditInputCard;