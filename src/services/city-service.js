
const {CityRepository}=require("../repository/index")
class CityService{
      constructor(){
        this.cityRepository=new CityRepository();
      }
      async createCity(data){
        try {
            const response= await this.cityRepository.createCity(data);
            return response;
        }catch(error){
            console.log("An error has occured ");
              throw{error};
        }
      }
      async deleteCity(cityId){
        try {
            
            const response=await this.cityRepository.deleteCity({cityId:cityId});
            return response;

        }catch(error){
            console.log("An error has occured ");
              throw{error};
        }
      }
      async updateCity(cityId,data){
        try {
            console.log(cityId+""+data+"sewr")
            const city=await this.cityRepository.updateCity(cityId,data);
            return city;
        }catch(error){
            console.log("An error has occured ");
              throw{error};
        }
      }
      async getCity(cityId){
        try {
           const city=await this.cityRepository.getCity({cityId:cityId});
           return city;
        }catch(error){
            console.log("An error has occured ");
              throw{error};
        }
      }
}
module.exports=CityService;
