import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { MasterCategory } from '../master-category';
import { SubCategory } from '../sub-category';
import { Month } from '../../calendar/month';

import { CalendarService } from '../../calendar/calendar.service';
import { TransactionsService } from '../../transactions/transactions.service';

@Component({
  selector: 'app-budget-view',
  templateUrl: './budget-view.component.html',
  styleUrls: ['./budget-view.component.css']
})
export class BudgetViewComponent implements OnInit {
  private categories: MasterCategory[] = [];
  private months: Month[] = [];
  private form: any = {};
  
  constructor(
    private calendar: CalendarService,
    private transactions: TransactionsService
  ) { }

  private initTimeframe(): void {
    this.months = this.calendar.getMonthRange(new Month(1, 2018), 3)
  }

  private initForm(): void {
    // Construct a form to manage the data in the view

    let form = {};

    // Create a form group for each Master Category
    this.categories.forEach(mCategory => {
      let mCategoryGroup = form[mCategory.getName()] || {};

      // Create a form group for each Sub Category
      mCategory.getSubCategories().forEach(sCategory => {
        let sCategoryGroup = mCategoryGroup[sCategory.getName()] || {};

        // Create a form group for each year/month
        this.months.forEach(month => {
          let yGroup = sCategoryGroup[month.getYearId()] || {};
          yGroup[month.getMonthId()] = yGroup[month.getMonthId()] || null;
          sCategoryGroup[month.getYearId()] = yGroup;
        });

        mCategoryGroup[sCategory.getName()] = sCategoryGroup;
      });

      form[mCategory.getName()] = mCategoryGroup;
    });

    this.form = form;
  }

  ngOnInit() {
    this.initTimeframe();

    let bills = new MasterCategory('Bills');

    bills.insertCategory(new SubCategory('Rent'));
    bills.insertCategory(new SubCategory('Car Insurance'));

    let expenses = new MasterCategory('Everyday Expenses');
    expenses.insertCategory(new SubCategory('Groceries'));
    expenses.insertCategory(new SubCategory('Transportation'));

    this.categories = [bills, expenses];

    this.initForm();
  }

  public createTransaction(): void {
    this.transactions.create(new Date(), 'Some Payee');
  }

  public save(): void {
    console.info('Saving Budget...')
    // Save form changes to the actual data model
    let mCategoryGroup: any, 
      mCategory: MasterCategory, 
      sCategoryGroup: any, 
      sCategory: SubCategory;
    Object.keys(this.form).forEach(mCategoryName => {
      mCategoryGroup = this.form[mCategoryName];

      // Find the Master Category object
      mCategory = this.categories.find(m => m.getName() === mCategoryName); 
    
      Object.keys(mCategoryGroup).forEach(sCategoryName => {
        sCategoryGroup = mCategoryGroup[sCategoryName];

        // Find the Sub Category object
        sCategory = mCategory.getSubCategories().find(s => s.getName() === sCategoryName);

        Object.keys(sCategoryGroup).forEach(year => {
          Object.keys(sCategoryGroup[year]).forEach(month => {
            if (sCategoryGroup[year][month]) sCategory.setBudget(parseInt(year), parseInt(month), sCategoryGroup[year][month]);
          });
        });
      });
    });
  }

}
