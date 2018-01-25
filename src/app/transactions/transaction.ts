import { SubCategory } from '../budgets/sub-category';

export enum TransactionType {
    PURCHASE = 'PURCHASE',
    SALE = 'SALE',
    TRANSFER = 'TRANSFER',
}

export class Transaction {
    private id: string;
    private created: Date;
    private modified: Date;

    private type: TransactionType;
    private transactionDate: Date;
    private payee: string;
    private subCategory: SubCategory;
    private memo: string;
    private cleared: boolean;

    constructor(transactionDate: Date = new Date(), payee: string, subCategory: SubCategory, memo: string = null, cleared: boolean = false) {
        this.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        this.created = new Date();
        this.modified = new Date();

        this.type = TransactionType.PURCHASE;
        this.transactionDate = transactionDate;
        this.payee = payee;
        this.subCategory = subCategory;
        this.memo = memo;
        this.cleared = cleared;
    }

    public getId(): string {
        return this.id;
    }

    public getCreatedDate(): Date {
        return this.created;
    }

    public getModifiedDate(): Date {
        return this.modified;
    }

    public getTransactionDate(): Date {
        return this.transactionDate
    }

    public getPayee(): string {
        return this.payee;
    }

    public getSubCategory(): SubCategory {
        return this.subCategory;
    }

    public getMemo(): string {
        return this.memo;
    }

    public getCleared(): boolean {
        return this.cleared;
    }
}