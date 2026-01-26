const express = require('express');
const router = express.Router();
const countryController = require('../controllers/country');

router.get('/', countryController.getAllData);
router.get('/:id', countryController.getData);
router.post('/', countryController.createData);
router.put('/:id', countryController.updateData);
router.delete('/:id', countryController.deleteData);

module.exports = router;