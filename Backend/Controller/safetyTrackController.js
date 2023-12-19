const SafetyTrack=require("../Models/SafetyTrack");

exports.getlatlon = (req, res) => {
    SafetyTrack.find().populate('user', 'name').then((latLonData) => {
      // Create an array to hold the data
      const data = [];
  
      for (const userLocation of latLonData) {
        const username = userLocation.user.name;
        const { lat, lon } = userLocation;
  
        // Create an object for each user
        const Data = {
          username,
          lat,
          lon,
          // `${username}`:{
          //   lat,
          //   lon
          // }
        };
  
        // Push the user object to the data array
        data.push({  Data });
      }
  
      // Send the response with the modified data
      res.status(200).json({ data });
    }).catch((error) => {
      res.status(500).json({ error: "Could not retrieve latitude and longitude data", details: error.message });
    });
  };
  
exports.postlatlon = (req, res) => {
    const { userid, lat, lon } = req.body;

    SafetyTrack.create({
        user: userid,
        lat: lat,
        lon: lon
    })
    .then((createdData) => {
        res.status(201).json({ message: "Latitude and longitude saved successfully", data: createdData });
    })
    .catch((error) => {
        res.status(500).json({ error: "Could not save latitude and longitude data", details: error.message });
    });
};
