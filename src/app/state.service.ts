import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  public paginationButtons = {
    page_size: 'Page Size',
    page_title: 'Show Page',
    first: '<<',
    first_title: 'עמוד ראשון',
    last: '>>',
    last_title: 'עמוד אחרון',
    prev: '<',
    prev_title: 'עמוד קודם',
    next: '>',
    next_title: 'עמוד הבא',
  }
}
