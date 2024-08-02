const Customer = require('../models/Customer');

module.exports = {

    // Add a new customer to the database (Create)
    createCustomer: (req, res) => {
        let obj = {
            order: req.body.order,
            ...req.body.cust,
            grandTotal: req.body.grandTotal / 100
        }
        Customer.create(obj)
            .then(customer => {
                res.json(customer)
            })
            .catch(e => {
                console.log(e)
                res.json({ success: false })
            })
    },

    // Login and Retrieve customer with order to edit (Read)
    getCustomerLogin(req, res) {
        const { name, phone } = req.params
        Customer.find({ customerName: name, phone: phone })
            .then(customer => {
                console.log(customer)
                if (customer.length) {
                    res.json(customer[customer.length - 1])
                } else {
                    res.json({message: 'Invalided Name or Phone# Please Check Your Name and Phone#'})
                }
            })
            .catch(err => res.status(500).json(err))
    },

    // Delete customer from the database (Delete/Cancel)
    deleteOrder(req, res) {
        const { id } = req.params
        Customer.findByIdAndDelete(id)
            .then(customer => res.json({success: true, message: "Your Order Deleted"}))
            .catch(err => res.status(500).json(err))
    },

    // Update Order (Change)
    updateCustOrder(req, res) {
        const { body } = req
        const { id } = req.params
        Customer.findByIdAndUpdate(id, body, { new: true })
          .then(newOrder => res.json({success: true, message: "Your Order Updated"}))
          .catch(err => res.status(500).json(err))
      },

}