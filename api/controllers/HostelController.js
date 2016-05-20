/**
 * HostelController
 *
 * @description :: Server-side logic for managing Hostels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  join:function(req,res){
    if (!req.isSocket) {
      console.log('bad Request...');
      return res.badRequest();
    }
    sails.sockets.join(req, 'showHostel');
  },
	show: function (req, res) {
		var id = req.param('id');
		Hostel.findOne({id:id}).exec(function(err,hostel){
			return res.view("hostel/show",{hostel:hostel});
		});
  	},
  	store:function (req, res){
  		var hostel = req.body;
  		Hostel.findOrCreate({name:hostel.name},hostel).exec(function(err, created){
        sails.sockets.broadcast('showHostel','hostel', created);
  			return res.json(created);
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
    },
    list:function(req,res){
      Hostel.find().limit(10).exec(function(err,hostels){
        res.json(hostels)
      });
    }
};

