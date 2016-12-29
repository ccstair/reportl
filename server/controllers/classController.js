const Class = require('../models/classModel');

const classController = {
  getClassById({ params: { course_id } }, res) {
    Class.forge({ course_id })
      .fetch({
        withRelated: ['course', 'modules'],
      })
      .then((clas) => {
        console.log(JSON.stringify(clas));
        res.json(clas);
      })
      .catch((err) => {
        console.log(`classController.getClassById - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  newClass({ body: classData }, res) {
    Class.forge(classData)
      .save()
      .then((clas) => {
        res.json(clas);
      })
      .catch((err) => {
        console.log(`classController.newClass - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  getAll(req, res) {
    Class.fetchAll({
      withRelated: ['course', 'modules'],
    })
    .then(classes => res.json(classes))
    .catch((err) => {
      console.log(`classController.getAll - Error: ${err}`);
      res.sendStatus(500);
    });
  },

};

module.exports = classController;
