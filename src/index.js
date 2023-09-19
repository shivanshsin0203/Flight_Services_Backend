const express=require("express");
const {port} =require("./config/serverConfig.js");
const CityRepository = require("./repository/city-repository.js");

const setUpandStartServer=async()=>{
    const app=express();
    
    app.listen(port,function(req,res){
         console.log("Server Started at Port "+port);
         const repo=new CityRepository();
         repo.createCity({name :"New Delhi"});
    }); 
}
setUpandStartServer();