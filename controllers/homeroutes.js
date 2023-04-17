const router = require('express').Router();
const { User, Sleep } =  require('../models');
const withAuth = require('../helpers/sqlHelpers');

router.get('/', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/sleep'); 
    return;
  }
  res.render('homepage');
});

router.get('/sleep', withAuth, async (req, res) => {
  try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        inlcude: [{ model: Sleep }],
      });

      const user = userData.get({ plain: true });
  
      res.render('sleep', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/sleep');
    return;
  }
  res.render('login');
});

module.exports = router;