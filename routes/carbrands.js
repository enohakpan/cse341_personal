const express = require('express');
const router = express.Router();
const carbrandsController = require('../controllers/carbrands');
const { isAuthenticated }= require('../middleware/authenticate');

router.get('/', isAuthenticated, carbrandsController.getAllData);
router.get('/:id', carbrandsController.getData);
router.post('/', isAuthenticated, carbrandsController.createData);
router.put('/:id', isAuthenticated, carbrandsController.updateData);
router.delete('/:id', isAuthenticated, carbrandsController.deleteData);

module.exports = router;