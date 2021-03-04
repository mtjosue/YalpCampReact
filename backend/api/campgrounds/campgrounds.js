const router = require('express').Router();
const Campground = require('../../db/models/Campground');

router.get('/', async (req, res) => {
  try {
    const campgrounds = await Campground.find((err, docs) => {
      if (err) {
        console.error(err);
      }

      res.status(200).json({ success: true, count: docs.length, data: docs });
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
