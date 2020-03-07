module.exports = function(app) {
    const locations = require("../controller/location.controller.js");
 //Get all rescues
 app.get("/api/locations", locations.findAll);

};