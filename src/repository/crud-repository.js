class CrudRepository{
    constructor(model){
        this.model=model;
    }
    async create(data){
        try{
         const result=await this.model.create(data);
         return result;
        }
        catch(error){
            console.log("Their Occured an error in Crud Repo");
            throw error;
        }
    }
    async destroy(modelId){
        try{
           const result= await this.model.destroy({
            where:{
                id:modelId
            }
           });
           return true;
        }
        catch(error){
            console.log("Their Occured an error in Crud Repo");
            throw error;
        }
    }
    async get(){
        try{
           const result= await this.model.findByPk(modelId)
           return result
        }
        catch(error){
            console.log("Their Occured an error in Crud Repo");
            throw error;
        }
    }
    async getAll(modelId){
        try{
            const result= await this.model.findAll(modelId)
            return result
        }
        catch(error){
            console.log("Their Occured an error in Crud Repo");
            throw error;
        }
    }
    async update(modelId,data){
        try{
            const result=await this.model.update(data,{
                where:{
                    id:modelId
                },
            })
        }
        catch(error){
            console.log("Their Occured an error in Crud Repo");
            throw error;
        }
    }
}
module.exports=CrudRepository;