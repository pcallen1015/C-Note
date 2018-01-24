import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BudgetViewComponent } from '../budgets/budget-view/budget-view.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'budget', pathMatch: 'full' },
  { path: 'budget', component: BudgetViewComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
