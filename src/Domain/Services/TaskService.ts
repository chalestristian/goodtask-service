import { ITasks } from "../Entities/ITasks";
import { TaskRepositoryAsync } from "../../InfraData/Repository/TaskRespositoryAsync";

export class TaskService{

    async CreateTask(dados: ITasks){

        const _taskRepository = new TaskRepositoryAsync;

        dados.active = true;
        dados.created = new Date();
        dados.updated = new Date();        
        
        const data = await _taskRepository.CreateTaskAsync(dados)
        
        if(!data)
        throw new Error('An error ocurred while creating task. Please, check the data and try again.')
         
        return data;
    }

    async GetTasks(){
        
        const _taskRepository = new TaskRepositoryAsync;
        const data = await _taskRepository.GetTasksAsync();
        return data

    }
    
    async GetTaskById(id){
       
        const _taskRepository = new TaskRepositoryAsync;    
        const data = await _taskRepository.GetTaskByIdAsync(id)

        return data

    }

    async UpdateTask(dados: ITasks){
        
        const _taskRepository = new TaskRepositoryAsync;

        dados.updated = new Date();
        const data = await _taskRepository.UpdateTaskAsync(dados)

        if(!data)
        throw new Error('An error ocurred while updating task. Please, check the data and try again.')

        return data    
    }

    async DeleteTask(id){        
        
        const _taskRepository = new TaskRepositoryAsync;
        const data = await _taskRepository.DeleteTaskAsync(id)

        return data
    }
}