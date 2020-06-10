import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './content-layout/content-layout.component';

@NgModule({
  declarations: [ContentLayoutComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ContentLayoutComponent]
})
export class LayoutModule { }
