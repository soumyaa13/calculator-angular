import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent {

  @Input() num1!:string;
  @Input() num2!:string;

  res1!:number;

  @Output() sendSubtraction = new EventEmitter<number>();

  subtract(first:string,second:string){
    this.res1= parseInt(first)-parseInt(second);
    this.sendSubtraction.emit(this.res1);
  }

}
