import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  counterValue=0;

  incrementCounter()
  {
    this.counterValue=this.counterValue+1;    
  }

  constructor() { }
  
  ngOnInit(): void {
  }

}
