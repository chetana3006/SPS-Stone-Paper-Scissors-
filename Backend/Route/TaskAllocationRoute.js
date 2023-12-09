const express = require('express');
const router = express.Router();
const {AllocateTask}=require("../Controller/TaskAllocationController");
console.log(`came`);
router.post("/allocatetask",AllocateTask);












module.exports = router;