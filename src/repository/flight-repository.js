const{Flight}=require('../models/index');
const {Op}=require('sequelize');
class FlightRepository{
    #createFlight(data){
        let filter={};
        if(data.arrivalAirportId){
            filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId=data.departureAirportId;

        }
        if(data.minPrice&&data.maxPrice){
            Object.assign(filter,{[Op.and]:[{price:{ [Op.gte]:data.minPrice}},
                {price:{ [Op.lte]:data.maxPrice}}
            ]})
        }
        if(data.minPrice){
            Object.assign(filter,{price:{ [Op.gte]:data.minPrice}});
        }
        if(data.maxPrice){
            Object.assign(filter,{price:{ [Op.lte]:data.maxPrice}});
        }
        return filter;
     }
    async createFlight(data)
    {
        try{
          const flight=await Flight.create(data);
          return flight;
        }
        catch(error)
        {
          console.log("An errreo occured in reopsitory");
          throw(error);
        }
    }
     async getAllFlights(filter){
        try{
        const filterObject=this.#createFlight(filter);
        const flight=await Flight.findAll({
            where:filterObject
        });
        return flight;
        }
        catch(error){
            console.log("An errreo occured in reopsitory");
            throw(error);
        }
     }
     async getFlight(flightId){
        try{
         const flight=await Flight.findByPk(flightId);
         return flight
        }
        catch(error){
            console.log("An errreo occured in reopsitory");
            throw(error);
        }
     }
     async flightUpdate(flightId,data){
        try{
            console.log(flightId+"id "+"data"+data);
             await Flight.update(data,{
                where:{
                    id:flightId
                }
             });
             return true;
        }
        catch(error){
            console.log("An errre occured in reopsitory");
            throw(error);
        }
     }
}
module.exports=FlightRepository;