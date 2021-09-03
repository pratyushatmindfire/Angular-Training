import { Injectable } from '@angular/core';
import { taskItemModel } from '../model/taskItemModel';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  public taskList: taskItemModel[] = [];
  
  constructor() { 
    this.setdefaultTasks();
  }
  
  setdefaultTasks()
  {
    // this.taskList = [
    //   {id: 1, title: "Play Sackboy - A Big Adventure", author: "Pratyush", priority: "Low"}, {id: 2, title: "Play Spiderman - Miles Morales", author: "Pratyush", priority: "Medium"}
    // ];

    this.taskList =[
      new taskItemModel(1, "Play Sackboy - A Big Adventure", "Pratyush", "Low"),
      new taskItemModel(2, "Play Spiderman - Miles Morales", "Pratyush", "Medium")
    ]
    return this.taskList;
  }

  getTasks()
  {
    return this.taskList;
  }

  editTaskById(taskIDToEdit, taskTitle, taskAuthor, taskPriority)
  {
    console.log(this.taskList);
    console.log("Task ID", taskIDToEdit);
    let foundTask = this.taskList.filter(currentTask => {return currentTask.id==taskIDToEdit})[0];
    console.log('foundTask=', foundTask);
    let newTask = new taskItemModel(taskIDToEdit, taskTitle, taskAuthor, taskPriority);
    console.log(newTask.title)
    let indextoReplace = this.taskList.indexOf(foundTask);
    this.taskList[indextoReplace] = newTask;
  }
  }