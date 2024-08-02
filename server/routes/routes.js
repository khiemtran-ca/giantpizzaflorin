// ++++++++ EXPORT ROUTES TO CONTROLLERS +++++++
const mainController = require('../controllers/mainItemCtrl.js');
const sodaController = require('../controllers/sodaCtrl');
const sideItemController = require('../controllers/sideItemCtrl');
const customerController = require('../controllers/customerCtrl');
const adminCtrl = require('../controllers/adminCtrl');
const { login, authenticateToken } = require('./middleware');

module.exports = (app) => {

        // ++++++++Main Items ROUTE+++++++++
        app.get('/mainItems', mainController.getPizzas);

        // ++++++++Side Items ROUTE+++++++++
        app.get('/sideItems', sideItemController.getSideItems);

        // ++++++++Soda ROUTE+++++++++
        app.get('/sodas', sodaController.getSodas);

        // ++++++++Customer ROUTES++++++
                // Create New Customer
        app.post('/customers', customerController.createCustomer);
                // Login & Retrieve Customer
        app.get('/login/:name/:phone', customerController.getCustomerLogin);
                // Delete/Cancel Order
        app.delete('/deleteOrder/:id', customerController.deleteOrder);
                // Update Order
        app.put('/newOrder/:id', customerController.updateCustOrder);
        
        // +++++++++Admin ROUTES++++++
                // Admin Access Only
        app.post('/admin_login', login);
                // Check Token
        app.get('/check_token', authenticateToken);
                // Retrieve Customers
        app.get('/get_customers', adminCtrl.getCustomers);
                //  Retrieve Menus from DB
        app.get('/get_menus_database', adminCtrl.getMenus);
                // Update Menus then send back to DB
        app.put('/updateDb/:id', adminCtrl.updateDb);     
};