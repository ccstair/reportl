const Module = require('../models/moduleModel');

const moduleController = {

  addClassModule({ body: moduleData }, res) {
  // console.log('req.body', req.body);
  // console.log('req.body.data', req.body.data);
  console.log('moduleData', moduleData);
    Module.forge(moduleData)
      .save()
      .then((moduleInfo) => {
        console.log('New module', JSON.stringify(moduleInfo));
        res.json(moduleInfo);
      })
      .catch((err) => {
        console.log(`moduleController.addClassModule - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  getAll(req, res) {
    Module.fetchAll({ withRelated: ['classes', 'gradeableobjects'] })
    .then(modules => res.json(modules))
    .catch((err) => {
      console.log(`moduleController.getAll - Error: ${err}`);
      res.sendStatus(500);
    });
  },

};

module.exports = moduleController;
