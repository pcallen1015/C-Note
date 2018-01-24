import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BudgetViewComponent } from './budget-view/budget-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    BudgetViewComponent,
  ]
})
export class BudgetsModule { }
