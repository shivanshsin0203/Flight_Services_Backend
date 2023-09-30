const {AirportService}=require('../services/index')
const airportservice=new AirportService();
const create=async(req,res)=>{
    try{
        const response=await airportservice.create(req.body);
        return res.status(201).json({
            message:"Airport added successfuly",
            error:[],
            data:response,
            success:true,

        })
    }
    catch(error){
        console.log("An errror in Controller Airport");
        return res.status(500).json({
            error:error,
            success:false,
            message:"Airport cannot be created"
        })
    }
}
module.exports={create}