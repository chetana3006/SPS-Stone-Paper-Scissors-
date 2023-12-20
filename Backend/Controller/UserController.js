const User=require("../Models/UserModel")

exports.registerUser = (req, res) => {
    const {
        name,
        phoneNumber,
        email,
        password,
        isAdmin,
        isSite,
        experience,
        expert,
        expectedPay,
        gender,
        previousProjects
    } = req.body;
    console.log( {
        name,
        phoneNumber,
        email,
        password,
        isAdmin,
        isSite,
        experience,
        expert,
        expectedPay,
        gender,
        previousProjects
    });
    User.create({
        name,
        phoneNumber,
        email,
        password,
        isAdmin,
        isSite,
        experience,
        expert,
        expectedPay,
        gender,
        previousProjects
    })
    .then((user) => {
        console.log(`User created: ${user}`);
        res.json({
            message: "success",
            data: user
        });
    })
    .catch((e) => {
        console.error(`Error creating user: ${e}`);
        res.status(500).json({
            error: "Error creating user"
        });
    });
};

exports.loginUser=(req,res)=>{
    const {phoneNumber,password}=req.body;
    console.log(phoneNumber,password)
    User.findOne({ phoneNumber })
        .then(user => {
            if (!user) {
                return res.json({ message: 'user not found' });
            }

            const isPasswordValid = password === user.password;

            if (!isPasswordValid) {
                return res.json({ message: 'password is not correct' });
            }

            res.json({ message: 'success',data:user });
        })
        .catch(error => {
            console.error(error);
            res.json({ message: 'Server error' });
        });
}
exports.getalluser=(req,res)=>{
    User.find().then((re)=>
    {
        return res.json({"Users":re});
    }).catch((e)=>{
        return res.json({"Users":"error bro"})
    })
}

exports.checkdanger = async (req, res) => {
    console.log(`came`);
    const { username } = req.params
    console.log(username);
    try {
      const user = await User.findOne({ "name": username });
  
      if (user && user.isDangerAlert === "yes") {
        res.json({ message: 'danger' }); 
      } else {
        res.json({ message: 'safe' });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.oneuser=async(req,res)=>{
    const {id}=req.body
    console.log(id);
    try{
        const user=await User.find({_id:id});
        if(user)
        {
            return res.json({"user":user})
        }
    }
    catch(e)
    {
        return res.json({"err":"errro bro"})
    }
  }