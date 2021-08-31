import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { SingleTaskComponent } from './singletask/singletask.component';
import { StorageService } from '../../services/storage.service';
import { PriorityTagComponent } from './priority-tag/priority-tag.component';

@NgModule({
  imports: [CommonModule, TodoListRoutingModule],
  declarations: [TodoListComponent, SingleTaskComponent, PriorityTagComponent],
  providers: [StorageService]
})
export class TodoListModule {}