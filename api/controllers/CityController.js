/**
 * CityController
 *
 * @description :: Server-side logic for managing Cities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
		return res.view("city/index");
  },
  show: function(req, res){
  		var city = req.param('city');
	  	Hostel.find({city:city}).exec(function(err,hostels){
			return res.view("city/hostels",{hostels:hostels,city:city});
		});
  }
};

