const express = require('express');
const bodyParser = require('body-parser');
const router = express();

router.post('/iot', (req, res) => {
    const { vehicle, type, sensorName, sensorType } = req.body;
    console.log('Received form data:', { vehicle, type, sensorName, sensorType });
    res.json({ message: 'Form submitted successfully' });
  });

  module.exports=router
  

