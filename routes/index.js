const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
  res.send('Welcome to my personal project for week 3-4 of CSE341!');
});

router.use('/carbrands', require('./carbrands'));

module.exports = router;