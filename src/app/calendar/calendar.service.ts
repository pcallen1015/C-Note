import { Injectable } from '@angular/core';

import { Month } from './month';

@Injectable()
export class CalendarService {

  constructor() { }

  public getMonthRange(start: Month, size: number = 3): Month[] {
    let range = [start];

    for (let i = 1; i < size; i++) {
      range.push(range[i - 1].getNextMonth());
    }
    return range;
  }

}
