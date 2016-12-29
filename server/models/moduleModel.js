const db = require('../database/db');
require('./gradeableObjectModel');
require('./classModel');

const Module = db.Model.extend({
  tableName: 'modules',
  hasTimestamps: false,
  classes() {
    return this.belongsTo('Class', 'class_id');
  },
  gradeableobjects() {
    return this.hasMany('GradeableObjectModel', 'module_id');
  },
});

module.exports = db.model('Module', Module);
