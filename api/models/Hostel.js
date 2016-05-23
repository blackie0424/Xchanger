/**
 * Hostel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name:{type:'string',required: true},
    address:{type:'string',required: true},
    phone:{type:'string',required: false},
    email:{type:'string',required: false},
    website:{type:'string',required: false},
    polis:{type:'string',required: false},
    created_at:{tpye:'datetime',required: false}
  },
  autoCreatedAt:false,
  autoUpdatedAt:false,
  autoPK: true
};

