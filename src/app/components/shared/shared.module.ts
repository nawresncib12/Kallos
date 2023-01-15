import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTitleComponent } from './app-title/app-title.component';



@NgModule({
  declarations: [
    AppTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AppTitleComponent],

})
export class SharedModule { }
