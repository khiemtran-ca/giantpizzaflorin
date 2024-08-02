const Sodas = require('../models/Sodas');

module.exports = {
    getSodas: (req, res) => {
        Sodas.find()
            .then(sodas => {
                res.json(sodas)
            })
            .catch(e => {
                console.log(e)
                res.json({ success: false })
            })
    }
}