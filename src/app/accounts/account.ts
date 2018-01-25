import { Transaction } from '../transactions/transaction';

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
    private onBudget: boolean;
  
    constructor(name: string, type: AccountType, onBudget: boolean = true) {
        this.name = name;
        this.type = type;
        this.onBudget = onBudget;
    }

    public getName(): string { return this.name; }
    public setName(name: string): void { this.name = name; }
}