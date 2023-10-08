const { Model } = require("sequelize");
const {FlightServices} = require("../services/index");
const checkTime = require("../utils/helper");

const flightService=new FlightServices();

const create=async(req,res)=>{
      try{
        const flight= await flightService.createFlight(req.body);
        
        return res.status(201).json({
            data:flight,
            success:true,
            error:'',
            message:'flight added sucessfully '
        });
      }
      catch(error){
        console.log("Error occured in Controller flight");
        return res.status(500).json({
            error:error,
            success:false,
            message:"Flight cannot be added"
        })
      }
}
const getAll =async(req,res)=>{
      try{
         const response=await flightService.getAllFlightData(req.query);
         return res.status(201).json({
            data:response,
            success:true,
            error:'',
            message:'flight deliverd sucessfully '
         })
      }
      catch(error){
        console.log("Error occured in Controller flight");
        return res.status(500).json({
            error:error,
            success:false,
            message:"Flight cannot be delivered"
        })
      }
}
const get =async(req,res)=>{
  try{
     const response=await flightService.getFlight(req.params.id);
     return res.status(201).json({
        data:response,
        success:true,
        error:'',
        message:'flight deliverd sucessfully '
     })
  }
  catch(error){
    console.log("Error occured in Controller flight");
    return res.status(500).json({
        error:error,
        success:false,
        message:"Flight cannot be delivered"
    })
  }
}
const update =async(req,res)=>{
  try{
     const response=await flightService.updateFlight(req.params.id,req.body);
     return res.status(201).json({
        data:response,
        success:true,
        error:'',
        message:'Changes Done '
     })
  }
  catch(error){
    console.log("Error occured in Controller flight");
    return res.status(500).json({
        error:error,
        success:false,
        message:"Flight cannot be delivered"
    })
  }
}
module.exports={
    create,getAll,get,update
}
