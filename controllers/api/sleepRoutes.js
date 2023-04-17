const router = require('express').Router();
const { User, Sleep } = require('../../models');
const withAuth = require('../../helpers/sqlHelpers');

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
  