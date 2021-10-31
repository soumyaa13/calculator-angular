import { Component, Input, Injectable } from '@angular/core';
import { AdditionComponent } from './addition/addition.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator';
  @Input() num1!: number;
  @Input() num2!: number;
  @Input() num3!: number;
  res1!: number;
  res2!: number;
  getResult(result: number) {
    this.res1 = result;
  }
  getResult2(result: number) {
    this.res2 = result;
  }
}
