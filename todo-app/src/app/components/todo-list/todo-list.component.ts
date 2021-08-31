import { Component, OnInit } from '@angular/core';
import { taskItemModel } from 'src/app/model/taskItemModel';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public localtaskList: taskItemModel[] = [];
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.localtaskList = this.storageService.defaultTasks();
  }

}
