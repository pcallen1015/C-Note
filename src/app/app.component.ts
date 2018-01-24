import { Component } from '@angular/core';

export class Budget {
  private id: string;
  private created: Date;
  private modified: Date;

  private name: string;
  private accounts: Account[];

  constructor() {
    this.created = new Date();
    this.modified = new Date();
    this.accounts = [];
  }
}

export enum AccountType {
  CHECKING = 'CHECKING',
  SAVINGS = 'SAVINGS',
  CASH = 'CASH',
  CREDIT_CARD = 'CREDIT_CARD',
  CREDIT_OTHER = 'CREDIT_OTHER',
  PAYPAL = 'PAYPAL',
  MERCHANT_ACCOUNT = 'MERCHANT_ACCOUNT',
  INVESTMENT_ACCOUNT = 'INVESTMENT_ACCOUNT',
}

export class Account {
  private id: string;
  private created: Date;
  private modified: Date;

  private name: string;
  private description: string;
  private type: AccountType;
  private transactions: Transaction[];

  constructor() {}
}

export enum TransactionType {
  PURCHASE = 'PURCHASE',
  SALE = 'SALE',
  TRANSFER = 'TRANSFER',
}

export class Transaction {
  private id: string;
  private created: Date;
  private modified: Date;

  private date: Date;
  private type: TransactionType;
  private payee: Payee;
  private inflow: number;
  private outflow: number;

  constructor() {
    let now = new Date();

    this.id = `transaction_${now.toString()}`;
    this.created = now;
    this.modified = now;

    this.date = now;
    this.type = TransactionType.PURCHASE;
    this.payee = new Payee();
    this.inflow = null;
    this.outflow = null;
  }
}

export class Payee {
  private id: string;
  private created: Date;
  private modified: Date;

  private name: string;
  private description: string;

  constructor() {
    let now = new Date();

    this.id = `payee_${now.toString()}`;
    this.created = now;
    this.modified = now;

    this.name = null;
    this.description = null;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
