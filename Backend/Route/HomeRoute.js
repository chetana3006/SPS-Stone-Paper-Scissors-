const express = require('express');
const router = express.Router();
const {createProject,getAllProjects}=require("../Controller/HomeController")


router.post("/create",createProject);
router.get("/all",getAllProjects);




module.exports = router;
