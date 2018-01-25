import { Component, OnInit } from '@angular/core';

import { MasterCategory } from '../../budgets/master-category';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-new-transaction-form',
  templateUrl: './new-transaction-form.component.html',
  styleUrls: ['./new-transaction-form.component.css']
})
export class NewTransactionFormComponent implements OnInit {
  private form: any = {};
  private categories: MasterCategory[] = [];

  constructor(private transactions: TransactionsService) { }

  private initForm(): void {
    this.form = {
      date: new Date(),
      payee: null,
      subCategory: null,
      memo: null,
      amount: null,
      cleared: false,
    };
  }

  private initCategories(): void {
    
  }

  public ngOnInit(): void {
    this.initForm();
    this.initCategories();
  }

  public save(createAnother: boolean = false): void {
    console.debug('save');
    console.debug(this.form);
    this.transactions.create(
      this.form.date,
      this.form.payee,
      this.form.subCategory
    );
    this.initForm();
  }

  public cancel(): void {
    console.debug('cancel');
    this.initForm();
  }

}
