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