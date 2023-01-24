import {Request, Response, } from 'express';
import { TaskService } from '../Domain/Services/TaskService';

export default class taskController{

    async AddTask(request: Request, response: Response) {
        const _taskService = new TaskService; 
        const data = await _taskService.CreateTask(request.body)

        response.json(data);
        return response
    } 

    async GetAllTasks (request: Request, response: Response)  {
        const _taskService = new TaskService;        
        const data = await _taskService.GetTasks();

        response.json(data);
        return response
    }

    async GetTaskById(request: Request, response: Response) {
        const _taskService = new TaskService;        
        const data = await _taskService.GetTaskById(parseInt(request.params.id));
        
        response.json(data);
        return response
    }

    async UpdateTask(request: Request, response: Response) {
        const _taskService = new TaskService;
        const data = await _taskService.UpdateTask(request.body);
        
        response.json(data);
        return response
    }

    async DeleteTask(request: Request, response: Response) {
        const _taskService = new TaskService;
        const data = await _taskService.DeleteTask(parseInt(request.params.id));
        
        response.json(data);
        return response
    }
}