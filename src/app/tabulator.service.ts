import { Injectable } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { Subject } from 'rxjs';
import {
    EditModule,
    FilterModule,
    PageModule,
    ResponsiveLayoutModule,
    SortModule,
    Tabulator,
} from 'tabulator-tables';

@Injectable({
    providedIn: 'root',
})
export class TabulatorService {
    public showCopyMsg = false;

    constructor(private clipboardApi: ClipboardService) {
        this.copyVisibilityChange.subscribe((value) => {
            this.showCopyMsg = value;
        });
    }

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

    public tabulatorModules = [
        PageModule,
        SortModule,
        EditModule,
        FilterModule,
        ResponsiveLayoutModule,
    ];

    public tabulatorOptions: Tabulator.Options = {
        textDirection: 'rtl',
        layout: 'fitColumns',
        pagination: true,
        paginationMode: 'local',
        paginationSize: 20,
        height: '100%',
        maxHeight: '85vh',
        locale: true,
        langs: {
            'en-gb': {
                pagination: this.paginationButtons,
            },
            'en-us': {
                pagination: this.paginationButtons,
            },
        },
        responsiveLayout: true,
    };

    copyVisibilityChange: Subject<boolean> = new Subject<boolean>();

    public copyToClipboard(table: Tabulator) {
        const data = table.getData('active');
        this.clipboardApi.copyFromContent(JSON.stringify(data));
        this.copyVisibilityChange.next(true);
        setTimeout(() => {
            this.copyVisibilityChange.next(false);
        }, 2500);
    }
}
