import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BudgetViewComponent } from './budget-view/budget-view.component';

import { TransactionsModule } from '../transactions/transactions.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    TransactionsModule,
  ],
  declarations: [
    BudgetViewComponent,
  ]
})
export class BudgetViewModule { }
