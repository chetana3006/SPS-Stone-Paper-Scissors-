const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({path:'./Variables.env'})
const Messageroute=require("./Route/Chatroute");
const Userroute=require("./Route/Userroute");
const Adminmessagesroute=require("./Route/AdminMessageroute");
const SiteEngineerRoute=require("./Route/SiteEngineerRoute");
const TaskAllocation=require("./Route/TaskAllocationRoute");
const EquipmentRouter=require("./Route/EquipmentRoute");
const roomRouter = require('./Route/roomCreation')
const complaint = require('./Route/ComplaintRoute')
const latlon = require('./Route/SafetyTrack')
const socketcontrollerfortrack=require('./Controller/socketfortrack')
const socketController = require('./Controller/SocketController.js');
const HomeRoute=require('./Route/HomeRoute')
const app = express();
const cors=require('cors')
const iotsetup = require('./Route/IOTSetup')
const dangerzone = require('./Route/DangerZoneRoute.js')
const http = require("http");
const { Server } = require("socket.io");
const { initSocket } = require('./Controller/socketfortrack');

// socketcontrollerfortrack.initSocket()
const server = http.createServer(app);
initSocket(server)

const server2 = http.createServer(app);
socketController.initSocket(server2);

const PORThttpequipment = 5000;
server2.listen(PORThttpequipment , () => {
    console.log(`HTTP server for equipment running on port ${PORThttpequipment}`);
})


app.use(cors())
app.use(express.json());
app.use("/m",Messageroute);
app.use("/u",Userroute);
app.use("/a",Adminmessagesroute);
app.use("/s",SiteEngineerRoute);
app.use("/task",TaskAllocation)
app.use("/comp",complaint)
app.use("/e",EquipmentRouter);
app.use("/l",latlon);
app.use("/home",HomeRoute);
app.use('/site',roomRouter)
app.use('/iot',iotsetup)
app.use('/danger',dangerzone)

console.log(process.env.PORT)

app.post('/set-db-name', (req, res) => {
      const { dbName } = req.body; 
      console.log(dbName);
      const MONGODB_URI = `mongodb+srv://sihMobile:ecobuildmavericks@cluster0.8uaptwt.mongodb.net/${dbName}`;
      mongoose.connect(MONGODB_URI)
          .then(() => {
              console.log("Database connected successfully");
              res.status(200).send("Database connected successfully");
          })
          .catch((err) => {
              console.error("Error connecting to database:", err);
              res.status(500).send("Error connecting to database");
          });
  });
const PORT = 8000;

// const MONGODB_URI = `mongodb+srv://sihMobile:@cluster0.8uaptwt.mongodb.net/Road`;
// const MONGODB_URI = `mongodb+srv://sihMobile:ecobuildmavericks@cluster0.8uaptwt.mongodb.net/Road`;
//       mongoose.connect(MONGODB_URI)
//           .then(() => {
//               console.log("Database connected successfully");
//             //   res.status(200).send("Database connected successfully");
//           })
//           .catch((err) => {
//               console.error("Error connecting to database:", err);
//             //   res.status(500).send("Error connecting to database");
//           });
 app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
});
