const db = require('../database/db');
require('./classModel');
// const GradeableObject = require('./gradeableObjectModel');

const Module = db.Model.extend({
  tableName: 'modules',
  hasTimestamps: false,
  classes() {
    return this.belongsTo('Class', 'classes_id');
  },
  // gradeableobjects() {
  //   return this.hasMany(GradeableObject, 'module_id');
  // },
});

module.exports = db.model('Module', Module);
