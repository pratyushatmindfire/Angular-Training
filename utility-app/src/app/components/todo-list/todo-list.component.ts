import { Component, OnInit } from '@angular/core';
import { taskItemModel } from 'src/app/model/taskItemModel';
import { StorageService } from '../../services/storage.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public localtaskList: taskItemModel[] = [];
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.localtaskList = this.storageService.getTasks();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.localtaskList, event.previousIndex, event.currentIndex);
  }

}
