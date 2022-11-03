import { Injectable } from '@angular/core';
import {TodoTaskModel} from "../models/todo-task.model";

@Injectable({
  providedIn: 'root'
})
export class TodoTaskService {

  constructor() { }

  tasks:TodoTaskModel[] =[
    {
      id:1,
      task:"Doing My Homeworks"
    },
    {
      id:2,
      task:"Cleaning my Bedroom"
    },
    {
      id:3,
      task:"Study my lessons"
    }
  ];

  getAllTasks(): TodoTaskModel[]{
    return this.tasks;
  }

  getTask(taskId: number): TodoTaskModel{
    const task = this.tasks.find(task=>task.id === taskId)
    if(!task){
      throw new Error("Task not Found!")
    }else{
    return task;
    }
  }
  addTask(newTask:TodoTaskModel):void{
    this.tasks.push(newTask);
  }


}
