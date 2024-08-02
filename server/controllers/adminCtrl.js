const Customer = require('../models/Customer');
const MainItems = require('../models/MainItems');
const SideItems = require('../models/SideItems');
const Sodas = require('../models/Sodas');

module.exports = {

    // Get customer from the database
    getCustomers: (req, res) => {
        Customer.find()
            .then(customers => {
                res.json(customers)
            })
            .catch(e => {
                console.log(e)
                res.json({ success: false })
            })
    },

    // Get Menus back from the database
    getMenus: async (req, res) => {
        const mainItems = await MainItems.find()
        const sideItems = await SideItems.find()
        Sodas.find()
            .then(sodas => {
                res.json({ pizzas: mainItems, sides: sideItems, sodas: sodas })
            })
            .catch(e => {
                console.log(e)
                res.json({ success: false })
            })
    },

    // Update Data Base (handle updateDb)
    updateDb: async (req, res) => {
        const { body } = req
        const { id } = req.params

        // Set switch to identify which items update
        switch (body.type) {
            case 'pizza':
                MainItems.findByIdAndUpdate(id, body.textArea, { new: true, useFindAndModify: false })
                    .then(resp => {
                        res.json({ success: true, message: "Update Database???" })
                    })
                    .catch(err => {
                        console.log(err)
                        res.json({ success: false, message: err })
                    });
                break;

            case 'side':
                SideItems.findByIdAndUpdate(id, body.textArea, { new: true, useFindAndModify: false })
                    .then(resp => {
                        res.json({ success: true, message: "Update Database???" })
                    })
                    .catch(err => {
                        console.log(err)
                        res.json({ success: false, message: err })
                    });
                break;

            case 'soda':
                Sodas.findByIdAndUpdate(id, body.textArea, { new: true, useFindAndModify: false })
                    .then(resp => {
                        res.json({ success: true, message: "Update Database???" })
                    })
                    .catch(err => {
                        console.log(err)
                        res.json({ success: false, message: err })
                    });
                break;

            default:
                res.json({ success: false, message: "something wrong" })

        }

    },
}