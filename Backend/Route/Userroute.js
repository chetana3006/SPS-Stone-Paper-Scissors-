const express=require("express")
const {registerUser, loginUser, getalluser, checkdanger, oneuser} =require("../Controller/UserController")
const router=express.Router();

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/alluser",getalluser)
router.post("/checkdanger/:username",checkdanger)
router.post("/oneuser",oneuser)


module.exports=router;