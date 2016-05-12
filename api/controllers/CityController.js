/**
 * CityController
 *
 * @description :: Server-side logic for managing Cities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	index: function (req, res) {
		Hostel.find().limit(10).exec(function(err,hostels){
			return res.view("city/index",{hostels:hostels});
		});
		
  },
  show: function(req, res){
		var city = req.param('city');
    Hostel.find({city:city,type:["民宿","好客民宿"]}).exec(function(err,hostels){
			return res.view("city/show",{hostels:hostels,city:city});
		});
  }
};

