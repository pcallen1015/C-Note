import { SubCategory } from './sub-category';

export class MasterCategory {
    private name: string;
    private categories: SubCategory[];
  
    constructor(name: string) {
      this.name = name;
      this.categories = [];
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getSubCategories(): SubCategory[] {
      return this.categories;
    }
  
    public getTotalBudgeted(year: number, month: number): number {
      return null;
    }
  
    public getTotalOutflows(year: number, month: number): number {
      return null;
    }
  
    public getTotalBalance(year: number, month: number): number {
      return null;
    }
  
    public insertCategory(category: SubCategory): SubCategory[] {
      this.categories.push(category);
      return this.categories;
    }
}