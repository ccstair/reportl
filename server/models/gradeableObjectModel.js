const db = require('../database/db');
const Module = require('./classModel');

const GradeableObjectModel = db.Model.extend({
  tableName: 'gradeable_objects',
  hasTimestamps: true,
  module() {
    return this.belongsTo(Module, 'module_id');
  },
  type() {
    return this.belongsTo('GradeableObjectType', 'type_id');
  },
});

module.exports = GradeableObjectModel;
