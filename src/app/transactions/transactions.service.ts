import { Injectable } from '@angular/core';

import { Transaction } from './transaction';

import { TRANSACTIONS } from '../../database/db.transactions';

@Injectable()
export class TransactionsService {

  constructor() { }

  public getAll(): Transaction[] {
    return TRANSACTIONS;
  }

  public create(date: Date, payee: string): Transaction {
    let t = new Transaction(date, payee);
    console.debug(t);
    return t;
  }

  public read(id: string): Transaction {
    return this.getAll().find(t => t.getId() === id);
  }

  public update(id: string): Transaction {
    return null;
  }

  public delete(id: string): void {

  }

}
