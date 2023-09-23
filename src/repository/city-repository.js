const {Op}=require('sequelize');
const {City}=require("../models/index");

class CityRepository{
    async createCity({name}){
           try{
            const city=await City.create({name});
            return city;
           }
           catch(error){
            console.log("Someting went wrong");
            throw {error}
           }
    }
    async deleteCity({cityId}){
        try{
             
              await City.destroy({
                where : {
                    id:cityId
                }
              });
              return true;
        }
        catch(error){
            console.log("Someting went wrong");
            throw {error}
           
        }
    }
    async updateCity(cityId,data){
         try{
            console.log("cityId:", cityId);
            console.log("data:", data);
            const city= await City.update({name:data},{
                where:{
                    id: cityId
                }
             });
             
             return city;
         }
         catch(error){
            console.log("Someting went wrong");
            throw {error}
         }
    }
    async getCity({cityId}){
        try{
          const city=await City.findByPk(cityId);
          return city;
        }
        catch(error){
            console.log("Someting went wrong");
            throw {error}
        }
        
    }
    async filterCity(filter){
            try{
                if(filter.name){
                    const cities=await City.findAll({
                        where:{
                            name:{
                            [Op.startsWith]:filter.name
                            }
                        }
                    });
                    return cities;
                }
                const cities=await City.findAll();
                return cities;
            }
            catch (error){
                console.log("Someting went wrong");
            throw {error}
            }
    }
}
module.exports=CityRepository;