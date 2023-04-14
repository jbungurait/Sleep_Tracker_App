const router = require('express').Router();
const { Sleep } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newSleepData = await Sleep.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newSleepData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;
  