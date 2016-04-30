var fs = require('fs');
var hostels = JSON.parse(fs.readFileSync('assets/hostel.json', 'utf8'));
module.exports = hostels;