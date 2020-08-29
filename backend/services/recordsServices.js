const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

async function read(req, res) {
    const {user, page} = req.params
    const limit = 5
    const skip = page*limit
    try{
        const records = await recordsModel.find({user: user}).sort({"date": "desc"}).skip(skip).limit(limit);
        res.send({res:true, records:records})

    } catch (error) {
        res.status(400).send({ res:false, error: error.message});
    }
}
async function create(req, res) {
    try{
        const record = new recordsModel(req.body);
        await record.save();
        res.send({res:true, newRecord:record})

    } catch (error) {
        res.status(400).send({ res:false, error: error.message});
    }
}
async function deleteOne(req, res) {
    try{
        const record = await recordsModel.findOneAndDelete( {"_id": req.params.id});
        res.send({res:true, deletedData:record})

    } catch (error) {
        res.status(400).send({ res:false, error: error.message});
    }
   
}
async function edit(req, res) {
    if (!req.body) {
        return res.status(400).send({
          message: 'No Data to Update',
        });
    }

    try{
        const record = await recordsModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true,useFindAndModify:false});
        res.send({res:true, newData:record})

    } catch (error) {
        res.status(400).send({  res:false, error: error.message});
    }
  
}

const recordsModel = require('../models/recordsModel');

module.exports = {read, create, deleteOne, edit};