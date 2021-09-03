import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from  '@angular/material/dialog';
import { PopupEdittaskComponent } from '../popup-edittask/popup-edittask.component';

@Component({
  selector: 'app-singletask',
  templateUrl: './singletask.component.html',
  styleUrls: ['./singletask.component.css']
})
export class SingleTaskComponent implements OnInit {

  @Input() taskObject: any;

  constructor(private  dialogRef : MatDialog) { }

  ngOnInit(): void {
  }

  openEditDialogue() {
    console.log("Opening dialogue");
    this.dialogRef.open(PopupEdittaskComponent, {
      data : {
        taskId : this.taskObject.id,
        taskTitle : this.taskObject.title,
        taskAuthor : this.taskObject.author,
        taskPriority : this.taskObject.priority
      }
    });
  }

}
