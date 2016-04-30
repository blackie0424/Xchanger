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
			return res.view("show",{hostel:hostel});
		});
  }
};

