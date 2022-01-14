import { Injectable } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { Subject } from 'rxjs';
import {
    EditModule,
    FilterModule,
    Module,
    PageModule,
    ResponsiveLayoutModule,
    SortModule,
    Tabulator,
} from 'tabulator-tables';
import { DictComponent } from './dict/dict.component';
import { ItabulatorData } from './interfaces/tabulator.interface';
import { TranslatorComponent } from './translator/translator.component';

@Injectable({
    providedIn: 'root',
})
export class TabulatorService {
    public showCopyMsg = false;

    constructor(private clipboardApi: ClipboardService) {
        this.copyVisibilityChange$.subscribe((value) => {
            this.showCopyMsg = value;
        });
    }

    public copyVisibilityChange$: Subject<boolean> = new Subject<boolean>();

    public sharedColumnOptions: Partial<Tabulator.ColumnDefinition> = {
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

    public tabulatorModules(componentTableModules: Module[]): Module[] {
        return [
            PageModule,
            SortModule,
            EditModule,
            FilterModule,
            ResponsiveLayoutModule,
            ...componentTableModules,
        ];
    }

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
            maxHeight: '85vh',
            locale: true,
            responsiveLayout: true,
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

    public copyToClipboard(table: Tabulator) {
        const data = table.getData('active');
        this.clipboardApi.copyFromContent(JSON.stringify(data));
        this.copyVisibilityChange$.next(true);
        setTimeout(() => {
            this.copyVisibilityChange$.next(false);
        }, 2500);
    }

    public generateTableByComponent(
        component: DictComponent | TranslatorComponent,
        tableClass: string
    ) {
        const tabulatorData = {
            tab: component.tab,
            table: component.table,
            tableData: component.tableData,
            columnNames: component.columnNames,
            tabulatorModules: component.tabulatorModules,
            tabulatorOptions: component.tabulatorOptions,
        };

        return this.drawTable(tabulatorData, tableClass);
    }

    public drawTable(
        tabulatorData: ItabulatorData,
        tableClass: string
    ): Tabulator {
        const {
            tab,
            tableData,
            columnNames,
            tabulatorModules,
            tabulatorOptions,
        } = tabulatorData;

        tab.classList.add('table-striped');
        Tabulator.registerModule(this.tabulatorModules(tabulatorModules));

        tabulatorData.table = new Tabulator(tab, {
            ...this.tabulatorOptions(tabulatorOptions),
            data: tableData,
            columns: columnNames,
        });

        document.getElementById(tableClass)!.appendChild(tab);

        return tabulatorData.table;
    }
}
