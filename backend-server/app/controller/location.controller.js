const db = require("../config/db.config.js");
const Location = db.locations;

// Fetch all rescues
exports.findAll = async (req, res) => {
    try{
      const locations = await Location.findAll();
      res.json(locations.sort(function(c1, c2) {return c1.id - c2.id;}));
    } catch(err) {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    }
  };