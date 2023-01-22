import { ITasks } from "../Entities/ITasks";
import { TaskRepositoryAsync } from "../../InfraData/Repository/TaskRespositoryAsync";

export class TaskService{

    async CreateTask(dados: ITasks){  
        
        const _taskRepository = new TaskRepositoryAsync;

        dados.active = true;
        dados.created = new Date();
        dados.updated = new Date();        
        const data = await _taskRepository.CreateTaskAsync(dados)

        return data

    }

    async GetTasksAsync(){
        
        const _taskRepository = new TaskRepositoryAsync;
        const data = await _taskRepository.GetTasksAsync();

        if(data)
            return data
                  
        return {message: "No tasks found"}

    }
    
    async GetTaskById(id){
       
        const _taskRepository = new TaskRepositoryAsync;    
        const data = await _taskRepository.GetTaskByIdAsync(id)

        if(data)
            return data

        return {message: "A task with this id was not found"}
    
    }

    async UpdateTask(dados: ITasks){
        
        const _taskRepository = new TaskRepositoryAsync;

        dados.updated = new Date();
        const data = await _taskRepository.UpdateTaskAsync(dados)

        return data
    
    }

    async DeleteTask(id){        
        
        const _taskRepository = new TaskRepositoryAsync;
        const data = await _taskRepository.DeleteTaskAsync(id)

        return data

    }
}