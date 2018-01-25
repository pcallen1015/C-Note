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