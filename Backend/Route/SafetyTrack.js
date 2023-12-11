const express = require('express');
const router = express.Router();
const {getlatlon, postlatlon}=require("../Controller/safetyTrackController")

router.get("/userlatlon",getlatlon)
router.post("/userlatlon",postlatlon)





module.exports = router;
