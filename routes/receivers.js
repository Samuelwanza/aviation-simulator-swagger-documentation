
const express = require('express');
const router = express.Router();

const receivers = require('../controllers/receivers');
const Receiver = require('../models/receiver');




router.get('/', receivers.index);


router.get('/:receiver_id', receivers.getReceiver);


router.post('/new', receivers.insertReceiver);


router.post('/delete/:receiver_id', receivers.deleteReceiver);

module.exports = router;