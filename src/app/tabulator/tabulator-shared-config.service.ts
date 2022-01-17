import { Injectable } from '@angular/core';
import { Tabulator } from 'tabulator-tables';

@Injectable({
    providedIn: 'root',
})
export class TabulatorSharedConfigService {
    constructor() {}
    public sharedColumnsOptions: Partial<Tabulator.ColumnDefinition> = {
        headerHozAlign: 'center',
        hozAlign: 'center',
        sorter: 'string',
        headerFilter: 'input',
    };

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
    };

    public tabulatorOptions(
        componentTableOptions: Tabulator.Options
    ): Tabulator.Options {
        return {
            textDirection: 'rtl',
            layout: 'fitColumns',
            pagination: true,
            paginationMode: 'local',
            paginationSize: 20,
            height: '100%',
            responsiveLayout: true,
            locale: true,
            langs: {
                'en-gb': {
                    pagination: this.paginationButtons,
                },
                'en-us': {
                    pagination: this.paginationButtons,
                },
            },
            ...componentTableOptions,
        };
    }
}
