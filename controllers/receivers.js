const { WriteError } = require('mongodb');
const Receiver = require('../models/receiver');

module.exports.index = async (req, res) => {
    try {
        const receivers = await Receiver.find({});
        console.log("SUCCESS, sending receivers...");
        console.log(receivers);
        const receiversCleaned = receivers.map((receiver) => {
            return {
                latitude: receiver.latitude,
                longitude: receiver.longitude,
                coverage_radius: receiver.coverage_radius,
                receiver_id:receiver._id
                
            }
        })
        console.log(receiversCleaned);
        res.send(receiversCleaned);
    } catch (err) {
        console.log(err);
    }
}

module.exports.getReceiver = async (req, res) => {
    try {
        const receiver = await Receiver.findById(req.params.receiver_id);
        console.log("SUCCESS, sending receiver...");
        const receiverCleaned = {
            latitude: receiver.latitude,
            longitude: receiver.longitude,
            coverage_radius: receiver.coverage_radius,
            receiver_id:receiver._id
        }
        res.send(receiverCleaned);
    } catch (err) {
        console.log(err);
    }
}


module.exports.insertReceiver = async (req, res) => {
    try {
        const receiver = await Receiver.create(req.body);
        console.log("SUCCESS, sending post...", receiver);
        const receiverCleaned = {
            latitude: receiver.latitude,
            longitude: receiver.longitude,
            coverage_radius: receiver.coverage_radius,
            receiver_id:receiver._id
        }
        res.send(receiverCleaned);
    } catch (err) {
        console.log(err);
    }
}

module.exports.deleteReceiver = async (req, res) => {
    try {
        await Receiver.findByIdAndDelete(req.params.receiver_id);
        console.log("DELETE SUCCESS...");
        res.send("Successful delete.")
    } catch (err) {
        console.log(err);
    }  
}