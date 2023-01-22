import { TaskService } from "../Domain/Services/TaskService";

 export class TaskApplication{
    
    async CreateTask(dados){
        const _taskService = new TaskService;
        return await _taskService.CreateTask(dados);
    }
    
    async GetTasks(){
        const _taskService = new TaskService;
        return await _taskService.GetTasksAsync();
    }

    async GetTaskById(id){
        const _taskService = new TaskService;
        return await _taskService.GetTaskById(id);
    }

    async UpdateTask(dados){
        const _taskService = new TaskService;
        return await _taskService.UpdateTask(dados);
    }

    async DeleteTask(id){
        const _taskService = new TaskService;
        return await _taskService.DeleteTask(id);
    }
}