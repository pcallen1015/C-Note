export class Transaction {
    private id: string;
    private created: Date;
    private modified: Date;

    private payee: string;
    private transactionDate: Date;

    constructor(transactionDate: Date = new Date(), payee: string) {
        this.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
        });
        this.created = new Date();
        this.modified = new Date();

        this.transactionDate = transactionDate;
        this.payee = payee;
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
}