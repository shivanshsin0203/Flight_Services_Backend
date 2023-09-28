const express=require("express");
const {port} =require("./config/serverConfig.js");
const ApiRoutes= require("./routes/index.js");
const bodyParser = require("body-parser");
const db=require('./models/index.js')
const setUpandStartServer=async()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/api',ApiRoutes);
   
    app.listen(port,function(req,res){
         console.log("Server Started at Port "+port);
         if(process.env.Sync_Db){
          db.sequelize.sync({alert:true});
         }
    }); 
}
setUpandStartServer();