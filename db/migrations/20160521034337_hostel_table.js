'use strict';

exports.up = function(knex, Promise) {
	return knex.schema.createTable('hostels', function(table) {
  		table.increments('id');
  		table.string('name');
  		table.string('address');
  		table.string('phone');
  		table.string('email');
  		table.string('website');
  		table.string('polis');
  		table.timestamps();
	})
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('hostels')
};
