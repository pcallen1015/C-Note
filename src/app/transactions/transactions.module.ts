import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TransactionsService } from './transactions.service';
import { NewTransactionFormComponent } from './new-transaction-form/new-transaction-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    NewTransactionFormComponent,
  ],
  exports: [
    NewTransactionFormComponent,
  ],
  providers: [
    TransactionsService,
  ],
})
export class TransactionsModule { }
