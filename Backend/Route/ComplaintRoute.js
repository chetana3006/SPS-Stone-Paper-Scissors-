const express=require("express");
const router=express.Router();
const {createComplaint,getAllComplaints,deleteComplaint,updateComplaint}=require("../Controller/ComplaintController");

router.post("/complaint",createComplaint);
router.get("/complaint",getAllComplaints);
// router.post("/complaintupdate",updateComplaint);
router.delete("/complaintdelete/:id",deleteComplaint);

module.exports=router;