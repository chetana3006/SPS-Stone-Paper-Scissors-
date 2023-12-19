const express=require("express")
const {registerUser, loginUser, getalluser, checkdanger} =require("../Controller/UserController")
const router=express.Router();

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/alluser",getalluser)
router.post("/checkdanger/:username",checkdanger)


module.exports=router;