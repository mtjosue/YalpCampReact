const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res.send('Yelp Camp Home Page');
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
