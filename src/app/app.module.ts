import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Routing */
import { AppRoutingModule } from './app-routing/app-routing.module';

/* AppComponent */
import { AppComponent } from './app.component';

/* Accounts */
import { AccountsModule } from './accounts/accounts.module';

/* Budgets */
import { BudgetsModule } from './budgets/budgets.module';

/* Calendar */
import { CalendarModule } from './calendar/calendar.module';

/* Payees */
import { PayeesModule } from './payees/payees.module';

/* Transactions */
import { TransactionsModule } from './transactions/transactions.module';

/* UI Utilities */
import { UiUtilitiesModule } from './ui-utilities/ui-utilities.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    AccountsModule,
    BudgetsModule,
    CalendarModule,
    PayeesModule,
    TransactionsModule,
    UiUtilitiesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
