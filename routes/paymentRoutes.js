const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/payment', paymentController.createPayment);

module.exports = router;
