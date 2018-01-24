import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsService } from './transactions.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    TransactionsService,
  ]
})
export class TransactionsModule { }
