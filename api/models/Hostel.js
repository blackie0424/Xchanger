/**
 * Hostel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    licence:{type:'string',required: false},
    name:{type:'string',required: true},
    type:{type:'string',required: false},
    star:{type:'string',required: false},
    city:{type:'string',required: true},
    township:{type:'string',required: true},
    address:{type:'string',required: true},
    phone:{type:'string',required: false},
    rooms:{type:'integer',required: false,defaultsTo: 0},
    email:{type:'string',required: false},
    website:{type:'string',required: false},
    zip_code:{type:'integer',required: false,defaultsTo: 0},
    enable_date:{type:'date',required: false},
  }
};

