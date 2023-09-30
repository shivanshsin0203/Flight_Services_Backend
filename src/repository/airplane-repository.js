const{Airplane}=require('../models/index');
class AirplaneRepository{
    async getAirplane(id){
        try{
        const palne =await Airplane.findByPk(id);
        return palne;
        }
        catch(error){
            console.log("error in aiplane repository");
            throw(error);
        }
    }
}
module.exports=AirplaneRepository;