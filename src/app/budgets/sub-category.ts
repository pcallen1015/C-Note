export class SubCategory {
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