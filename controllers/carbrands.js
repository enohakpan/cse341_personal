const mongodb = require('../db/mongo');
const ObjectId = require('mongodb').ObjectId;

// const getAllData = async (req, res, next) => {
//   //#swagger.tags = ['Professional']
//   const result = await mongodb.getDb().db('cse341_personal').collection('carbrands').find();
//   result.toArray().then((lists) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(lists);
//   });
// };

// const getData = async (req, res) => {
//   //#swagger.tags = ['Professional']
//   const id = new ObjectId(req.params.id);
//   const result = await mongodb.getDb().db('cse341_personal').collection('carbrands').find({ _id: id });
//   result.toArray().then((lists) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(lists[0]);
//   });
// };

const createData = async (req, res, next) => {
  //#swagger.tags = ['carbrands']
  const carbrand = {
    model: req.body.carModel,
    productionYear: req.body.productionYear,
    color: req.body.color,
    manufacturer: req.body.manufacturer,
    imageUrl: req.body.imageUrl
  };
  const response = await mongodb.getDb().db('cse341_personal').collection('carbrands').insertOne(carbrand);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact. Please try again later, thank you');
  }
};


const updateData = async (req, res, next) => {
  //#swagger.tags = ['carbrands']
  const id = new ObjectId(req.params.id);
  const carbrand = {
    model: req.body.carModel,
    productionYear: req.body.productionYear,
    color: req.body.color,
    manufacturer: req.body.manufacturer,
    imageUrl: req.body.imageUrl
  };
  const response = await mongodb.getDb().db('cse341_personal').collection('carbrands').replaceOne({ _id: id }, carbrand);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Error updating contact.');
  }
};

const deleteData = async (req, res, next) => {
  const id = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('cse341_personal').collection('carbrands').deleteOne({ _id: id });
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};

module.exports = {
  // getAllData,
  // getData,
  createData,
  updateData,
  deleteData
};