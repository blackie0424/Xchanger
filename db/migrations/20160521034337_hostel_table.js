'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('hostels', function(table) {
  		table.increments('id');
  		table.string('name').notNullable() ;
  		table.string('address').notNullable();
  		table.string('phone');
  		table.string('email');
  		table.string('website');
  		table.string('polis');
      table.timestamp('updated_at');
    })
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('hostels')
};
