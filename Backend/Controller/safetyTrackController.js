const SafetyTrack=require("../Models/SafetyTrack");

exports.getlatlon = (req, res) => {
    SafetyTrack.find().populate('user', 'name').then((latLonData) => {
            res.status(200).json({ data: latLonData });
        })
        .catch((error) => {
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
