const express=require("express");
const {port} =require("./config/serverConfig.js");


const setUpandStartServer=async()=>{
    const app=express();
    
    app.listen(port,function(req,res){
         console.log("Server Started at Port "+port);
    }); 
}
setUpandStartServer();