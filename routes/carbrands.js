const express = require('express');
const router = express.Router();
const carbrandsController = require('../controllers/carbrands');

router.get('/', carbrandsController.getAllData);
router.get('/:id', carbrandsController.getData);
router.post('/', carbrandsController.createData);
router.put('/:id', carbrandsController.updateData);
router.delete('/:id', carbrandsController.deleteData);

module.exports = router;