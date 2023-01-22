import {Request, Response, } from 'express';
import { TaskApplication } from '../Application/TaskApplication';
export default class taskController{
        
    async AddTask(request: Request, response: Response) {

        const _taskApplication = new TaskApplication;
        const data = await _taskApplication.CreateTask(request.body)

        response.json(data);
        return response
        
    }
 
    async GetAllTasks(request: Request, response: Response){

        const _taskApplication = new TaskApplication;        
        const data = await _taskApplication.GetTasks();
        
        response.json(data);
        return response
    
    }

    async GetTaskById(request: Request, response: Response) {

        const _taskApplication = new TaskApplication;        
        const data = await _taskApplication.GetTaskById(parseInt(request.params.id))
        
        response.json(data);
        return response

    }

    async UpdateTask(request: Request, response: Response) {

        const _taskApplication = new TaskApplication;
        const data = await _taskApplication.UpdateTask(request.body)
        
        response.json(data);
        return response

    }

    async DeleteTask(request: Request, response: Response) {

        const _taskApplication = new TaskApplication;
        const data = await _taskApplication.DeleteTask(parseInt(request.params.id))
        
        response.json(data);
        return response
    }
}