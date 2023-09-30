const e = require("express");

class CrudService{
    constructor(repository){
        this.repository=repository;
    }
    async create(data){
          try{
          const response=await this.repository.create(data);
          return response;
          }
          catch(error){
            console.log("An error in Crud Service");
            throw error;
          }
    }
    async destroy(id){
        try{
          const response=await this.repository.destroy(id);
           return response;
        }
        catch(error){
          console.log("An error in Crud Service");
          throw error;
        }
  }
  
    async getAll(id){
        try{
            const response=await this.repository.get(id);
            return response;
        }
        catch(error){
        console.log("An error in Crud Service");
        throw error;
        }
    }
    async update(modelId,data){
        try{
            const response=await this.repository.update(modelId,data);
            return response;
        }
        catch(error){
        console.log("An error in Crud Service");
        throw error;
        }
    }
}
module.exports=CrudService;