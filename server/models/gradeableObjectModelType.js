const db = require('../database/db');
require('./gradeableObjectModel');

const GradeableObjectType = db.Model.extend({
  tableName: 'gradeable_objects_types',
  hasTimestamps: true,
  gradeableobjects() {
    return this.hasMany('GradeableObjects', 'type_id');
  },
});

module.exports = db.model('GradeableObjectType', GradeableObjectType);
