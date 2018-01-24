export class Month {
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