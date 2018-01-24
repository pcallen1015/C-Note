import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Routing */
import { AppRoutingModule } from './app-routing/app-routing.module';

/* AppComponent */
import { AppComponent } from './app.component';

/* Budget View */
import { BudgetViewModule } from './budget-view/budget-view.module';

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
    BudgetViewModule,
    UiUtilitiesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
