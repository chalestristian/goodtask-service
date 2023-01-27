import {Request, Response, } from 'express';
import { TaskService } from '../Domain/Services/TaskService';
const isEmpty = require('lodash.isempty');


export default class taskController{

    async AddTask(request: Request, response: Response) {

        if(isEmpty(request.body))
        return response.status(204).json({"response:" : null});

        const _taskService = new TaskService; 
        const data = await _taskService.CreateTask(request.body)
        
        return response.status(200).json({"response:": data});

    }

    async GetAllTasks (request: Request, response: Response)  {

        const _taskService = new TaskService;        
        const data = await _taskService.GetTasks();

        return response.status(200).json({"response:": data});

    }

    async GetTaskById(request: Request, response: Response) {

        if(isEmpty(request.params))
        return response.status(204).json({"response:" : null});

        const _taskService = new TaskService;        
        const data = await _taskService.GetTaskById(parseInt(request.params.id));
        
        return response.status(200).json({"response:": data});
        
    }

    async UpdateTask(request: Request, response: Response) {

        if(isEmpty(request.body))
        return response.status(204).json({"response:" : null});

        const _taskService = new TaskService;
        const data = await _taskService.UpdateTask(request.body);
        
        return response.status(200).json({"response:": data});

    }

    async DeleteTask(request: Request, response: Response) {

        if(isEmpty(request.params))
        return response.status(204).json({"response:" : null});

        const _taskService = new TaskService;
        const data = await _taskService.DeleteTask(parseInt(request.params.id));
        
        return  response.status(200).json({"response:": data});
        
    }
}