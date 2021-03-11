import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  disabledStatus=false;
  blinkdisabledStatus=false;

  constructor() {
    setTimeout(()=> {this.disabledStatus=true;}, 3000);
    setInterval(()=>{this.blinkdisabledStatus=!this.blinkdisabledStatus}, 1000);
   }

  ngOnInit(): void {
  }

}
