const db = require('../database/db');
require('./gradeableObjectModelType');
require('./moduleModel');

const GradeableObjectModel = db.Model.extend({
  tableName: 'gradeable_objects',
  hasTimestamps: false,
  module() {
    return this.belongsTo('Module', 'module_id');
  },
  type() {
    return this.belongsTo('GradeableObjectType', 'type_id');
  },
});

module.exports = db.model('GradeableObjectModel', GradeableObjectModel);
