import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

class Month {
  private MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  private monthId: number;
  private yearId: number;

  constructor(m: number = 1, y: number = 0) {
    this.monthId = m;
    this.yearId = y;
  }

  public getName(): string {
    return this.MONTH_NAMES[this.monthId - 1];
  }

  public getMonthId(): number {
    return this.monthId;
  }

  public getYearId(): number {
    return this.yearId;
  }
}

class MasterCategory {
  private name: string;
  private categories: SubCategory[];

  constructor(name: string) {
    this.name = name;
    this.categories = [];
  }

  public getName(): string {
    return this.name;
  }

  public getSubCategories(): SubCategory[] {
    return this.categories;
  }

  public getTotalBudgeted(year: number, month: number): number {
    return null;
  }

  public getTotalOutflows(year: number, month: number): number {
    return null;
  }

  public getTotalBalance(year: number, month: number): number {
    return null;
  }

  public insertCategory(category: SubCategory): SubCategory[] {
    this.categories.push(category);
    return this.categories;
  }
}

class SubCategory {
  private name: string;
  private budgeted: any;

  constructor(name: string) {
    this.name = name;
    this.budgeted = {};
  }

  public getName(): string {
    return this.name;
  }

  public getBudgeted(year: number, month: number): number {
    try { return this.budgeted[year][month]; } 
    catch (e) { return null; }
  }

  public setBudget(year: number, month: number, amount: number): number {
    this.budgeted[year] = this.budgeted[year] || {};
    this.budgeted[year][month] = this.budgeted[year][month] || {};
    this.budgeted[year][month] = amount;
    return this.getBudgeted(year, month);
  }

  /**
   * TODO: add up all the outflow amounts related to this Sub Category for the given year/month
   */
  public getOutflows(year: number, month: number): number {
    return 0;
  }

  /**
   * TODO: calculate the running balance for the Sub Category
   */
  public getBalance(year: number, month: number): number {
    return 0;
  }
}

@Component({
  selector: 'app-budget-view',
  templateUrl: './budget-view.component.html',
  styleUrls: ['./budget-view.component.css']
})
export class BudgetViewComponent implements OnInit {
  private categories: MasterCategory[] = [];
  private months: Month[] = [];
  private form: any = {};
  
  constructor() { }

  private initTimeframe(): void {
    this.months = [
      new Month(1, 2018),
      new Month(2, 2018),
      new Month(3, 2018)
    ];
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
