/**
* Activity.js
*
* @description :: Each Activity has a name, a type, a point count.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName: 'activities',
  attributes: {
      id: {
          type: 'integer',
          unique: true,
          primaryKey: true,
          autoIncrement: true,
          columnName: 'id'
      },
      name: {
          type: 'string',
          columnName: 'name'
      },
      type: {
          type: 'string',
      },
      points: {
          type: 'integer',
          columnName: 'points'
      }      
  }
};

