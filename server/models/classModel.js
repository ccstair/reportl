const db = require('../database/db');
const Course = require('./courseModel');
require('./moduleModel');

const Class = db.Model.extend({
  tableName: 'classes',
  hasTimestamps: true,
  course() {
    return this.belongsTo(Course, 'id');
  },
  modules() {
    return this.hasMany('Module', 'classes_id');
  },
});

module.exports = db.model('Class', Class);
