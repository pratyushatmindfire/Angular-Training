import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-singletask',
  templateUrl: './singletask.component.html',
  styleUrls: ['./singletask.component.css']
})
export class SingleTaskComponent implements OnInit {

  @Input() taskObject: any;

  constructor() { }

  ngOnInit(): void {
  }

}
