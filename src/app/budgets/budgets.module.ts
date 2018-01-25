import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BudgetViewComponent } from './budget-view/budget-view.component';
import { BudgetsService } from './budgets.service';

import { TransactionsModule } from '../transactions/transactions.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    TransactionsModule,
  ],
  declarations: [
    BudgetViewComponent,
  ],
  providers: [
    BudgetsService,
  ]
})
export class BudgetsModule { }
