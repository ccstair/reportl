const db = require('../database/db');
const Class = require('./classModel');
// const GradeableObject = require('./gradeableObjectModel');

const Module = db.Model.extend({
  tableName: 'modules',
  hasTimestamps: false,
  classes() {
    return this.belongsTo(Class, 'id');
  },
  // gradeableobjects() {
  //   return this.hasMany(GradeableObject, 'module_id');
  // },
});

module.exports = Module;
