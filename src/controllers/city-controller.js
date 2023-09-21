const {CityServices}=require("../services/index.js");
const CityService=new CityServices();

const create=async (req,res)=>{
    try{
        console.log("here");
        const city=await CityService.createCity(req.body);
           return res.status(201).json({
            data:city,
            success:true,
            message:"City added successfuly",
            err:{},
           })
    }
    catch(error){
        console.log(error)
              return res.status(500).json({
                data:[],
                success:false,
                message:"City could not be added",
                err:error
              })
    }
    
};
const destroy=async (req,res)=>{
    try{
           const city=await CityService.deleteCity(req.params.id);
           return res.status(201).json({
            data:city,
            success:true,
            message:"City deleted successfuly",
            err:{},
           })
    }
    catch(error){
        console.log(error)
              return res.status(500).json({
                data:[],
                success:false,
                message:"City could not be deleted",
                err:error
              })
    }
    
};
const get=async (req,res)=>{
    try{
           const city=await CityService.getCity(req.params.id);
           return res.status(201).json({
            data:city,
            success:true,
            message:"City dilevered successfuly",
            err:{},
           })
    }
    catch(error){
        console.log(error)
              return res.status(500).json({
                data:[],
                success:false,
                message:"City could not be delevered",
                err:error
              })
    }
    
};
const update=async (req,res)=>{
    try{
           const city=await CityService.updateCity(req.params.id,req.body);
           return res.status(201).json({
            data:city,
            success:true,
            message:"City updated successfuly",
            err:{},
           })
    }
    catch(error){
        console.log(error)
              return res.status(500).json({
                data:[],
                success:false,
                message:"City could not be updated",
                err:error
              })
    }
    
};
module.exports={
    create,get,destroy,update
}


