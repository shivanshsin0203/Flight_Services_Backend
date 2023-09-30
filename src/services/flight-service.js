const {FlightRepository,AirplaneRepository}=require('../repository/index');
class FlightServices{
    constructor(){
        this.flightRepository=new FlightRepository();
        this.airplaneRepository=new AirplaneRepository();
    }
    
    async createFlight(data){
        try{
            const airplane=await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight=await this.flightRepository.createFlight(
                {...data,totalSeats:airplane.capacity}
            );
            return flight;
        }catch(error){
            console.log("Error in Service Flight");
            throw(error);
        }
    }
}
module.exports=FlightServices;