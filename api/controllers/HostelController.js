/**
 * HostelController
 *
 * @description :: Server-side logic for managing Hostels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	show: function (req, res) {
		var id = req.param('id');
		Hostel.findOne({id:id}).exec(function(err,hostel){
			return res.view("hostel/show",{hostel:hostel});
		});
  	},
  	create:function (req, res){
  		res.view('hostel/create');
  	},
  	store:function (req, res){
  		var hostel = req.body;
  		Hostel.create(hostel).exec(function(err, created){
  			return res.redirect('/city');
  		});
  	},
  	polis:function(req, res){
		var id = req.param('id');
		Hostel.findOne({id:id}).exec(function(err,hostel){
			return res.view("hostel/polis",{hostel:hostel});
		});
  	},
    search:function(req, res){
      var _hostel = req.body;

      Hostel.findOne(_hostel).exec(function(err,hostel){
          return res.json(hostel);
      });
    }
};

