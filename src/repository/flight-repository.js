const{Flight}=require('../models/index');
class FlightRepository{
    async createFlight(data)
    {
        try{
          const flight=await Flight.create(data);
          return flight;
        }
        catch(error)
        {
          console.log("Ann errreo occured in reopsitory");
          throw(error);
        }
    }
}
module.exports=FlightRepository;