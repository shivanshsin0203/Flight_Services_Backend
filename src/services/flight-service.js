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
    async getAllFlightData(data){
        try{
           const flights=await this.flightRepository.getAllFlights(data);
           return flights
        }catch(error){
            console.log("Error in Service Flight");
            throw(error);
        }
    }
    async getFlight(data){
        try{
             const flight=await this.flightRepository.getFlight(data);
             return flight;
        }catch(error){
            console.log("Error in Service Flight");
            throw(error);
        }
    }
    async updateFlight(flightId,data){
        try{
           const response=await this.flightRepository.flightUpdate(flightId,data);
           return response
        }catch(error){
            console.log("Error in Service Flight");
            throw(error);
        }
    }
}
module.exports=FlightServices;