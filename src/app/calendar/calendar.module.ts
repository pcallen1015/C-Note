import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarService } from './calendar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CalendarService,
  ]
})
export class CalendarModule { }
