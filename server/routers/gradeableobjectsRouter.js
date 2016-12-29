const router = require('express').Router();
const gradeableobjectsController = require('../controllers/gradeableobjectsController');

router.get('/', gradeableobjectsController.getAll);
router.post('/', gradeableobjectsController.newGradeableObject);

module.exports = router;
