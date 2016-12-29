const GradeableObjectModel = require('../models/gradeableObjectModel');

const gradeableObjectController = {

  newGradeableObject({ body: gradeableobjectData }, res) {
    GradeableObjectModel.forge(gradeableobjectData)
      .save()
      .then((gradeableobject) => {
        res.json(gradeableobject);
      })
      .catch((err) => {
        console.log(`gradeableObjecController.newGradeableObject - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  getAll(req, res) {
    GradeableObjectModel.fetchAll({
      withRelated: ['module', 'type'],
    })
    .then(gradeableobjects => res.json(gradeableobjects))
    .catch((err) => {
      console.log(`gradeableObjecController.getAll - Error: ${err}`);
      res.sendStatus(500);
    });
  },

};

module.exports = gradeableObjectController;
