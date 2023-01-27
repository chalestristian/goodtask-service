import { Tasks } from "../../Domain/Entities/Tasks";
import { ITasks } from "../../Domain/Entities/ITasks";
import AppDataSource from "../Database/database";

export class TaskRepositoryAsync {
    private _taskContext = AppDataSource.getRepository(Tasks);

    async CreateTaskAsync(data: ITasks){
        
        const value = await this._taskContext        
        .createQueryBuilder("tasks")
        .insert()
        .into(Tasks)
        .values(data)
        .execute();        
        return value.raw;
    }

    async GetTasksAsync(){

        const data = await this._taskContext.find()     
        return data;
    }

    async GetTaskByIdAsync(id: ITasks["id"]){

        const data = await this._taskContext
        .createQueryBuilder("tasks")
        .where("tasks.id = :id",{ id: id })
        .getOne();
        return data;

    }

    async UpdateTaskAsync(data: ITasks){

        const value = await this._taskContext
        .createQueryBuilder("tasks")
        .update()
        .set({...data})
        .where("id = :id", {id: data.id})
        .execute();
        return value.raw;

    }
 
    async DeleteTaskAsync(id:ITasks["id"]){

        const value = await this._taskContext
        .createQueryBuilder("tasks")
        .delete()
        .where("id = :id", { id: id })
        .execute()
        return value.raw;
            
    }
}