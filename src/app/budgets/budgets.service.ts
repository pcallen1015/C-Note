import { Injectable } from '@angular/core';
import { MasterCategory } from './master-category';

@Injectable()
export class BudgetsService {

  constructor() { }

  public getCategories(): MasterCategory[] {
    return [];
  }

}
