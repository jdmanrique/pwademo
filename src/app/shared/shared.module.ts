import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ],
  exports: [
    CommonModule, BrowserModule, AppRoutingModule, ChartsModule, FormsModule
  ]
})
export class SharedModule { }
