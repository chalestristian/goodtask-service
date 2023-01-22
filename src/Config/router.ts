import express from "express";
import TaskController from "../Api/TaskController";

const tasks = new TaskController
const router = express.Router()

router.post('/tasks', tasks.AddTask)
router.get('/tasks/all', tasks.GetAllTasks)
router.get('/tasks/:id', tasks.GetTaskById)
router.put('/tasks/update', tasks.UpdateTask)
router.delete('/tasks/delete/:id', tasks.DeleteTask)

export default router