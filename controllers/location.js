const Location = require("../models/Location");

exports.addLocation = async (req, res) => {
  const location = new Location(req.body);

  await location.save();

  res.json(location);
};

exports.getLocations = async (req, res) => {
 const location = await Location.find({}).sort({name: 1});

 res.json(location);
};
