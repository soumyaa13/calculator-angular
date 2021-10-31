import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { DivisionComponent } from './division/division.component';
import { FactorialComponent } from './factorial/factorial.component';
import { PrimeComponent } from './prime/prime.component';



@NgModule({
  declarations: [AppComponent, AdditionComponent, SubtractionComponent, MultiplicationComponent, DivisionComponent, FactorialComponent, PrimeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
