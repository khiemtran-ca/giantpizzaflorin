const SideItems = require('../models/SideItems');

module.exports = {
    getSideItems: (req, res) => {
        SideItems.find()
            .then(items => {
                res.json(items)
            })
            .catch(e => {
                console.log(e)
                res.json({ success: false })
            })
    }
}