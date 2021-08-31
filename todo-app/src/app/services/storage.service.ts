import { Injectable } from '@angular/core';
import { taskItemModel } from '../model/taskItemModel';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  public taskList: taskItemModel[] = [];
  
  constructor() { }
  
  defaultTasks()
  {
    this.taskList = [{id: 1, title: "Play Sackboy - A Big Adventure", priority: "Low"}, {id: 2, title: "Play Spiderman - Miles Morales",priority: "Medium"}];
    return this.taskList;
  }
  }