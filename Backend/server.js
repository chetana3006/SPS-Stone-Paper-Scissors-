const mongoose = require('mongoose');
const express = require('express')

const DBKEY = "mongodb+srv://sihMobile:ecobuildmavericks@cluster0.8uaptwt.mongodb.net/?retryWrites=true&w=majority"
const port = 3000;

const app = express();


mongoose.connect(DBKEY).then(console.log("Database connected successfully"))

app.get('/',(req,res)=>{
    res.send("hello");
})


 app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
});


