const MainItems = require('../models/MainItems');

module.exports = {
    getPizzas: (req, res) => {
        MainItems.find()
            .then(pizzas => {
                res.json(pizzas)
            })
            .catch(e => {
                console.log(e)
                res.json({ success: false })
            })
    }
}