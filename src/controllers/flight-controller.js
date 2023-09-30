const { Model } = require("sequelize");
const {FlightServices} = require("../services/index");
const checkTime = require("../utils/helper");

const flightService=new FlightServices();

const create=async(req,res)=>{
      try{
        const flight= await flightService.createFlight(req.body);
        if(!checkTime(data.arrivalTime,departureTime)){
             throw {error:'Time is not correct'}
        }
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
            message:"Flighgt cannot be added"
        })
      }
}
module.exports={
    create,
}
