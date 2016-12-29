const router = require('express').Router();
const classController = require('../controllers/classController');

router.get('/:course_id', classController.getClassById);
router.get('/', classController.getAll);
router.post('/', classController.newClass);

module.exports = router;
