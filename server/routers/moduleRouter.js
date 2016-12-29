const router = require('express').Router();
const moduleController = require('../controllers/moduleController');

if (process.env.NODE_ENV !== 'production') {
  router.all('*', (req, res, next) => {
    console.log('moduleRouter');
    next();
  });
}

router.post('/', moduleController.addClassModule);
router.get('/', moduleController.getAll);

module.exports = router;
