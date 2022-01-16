import { Injectable } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { Subject } from 'rxjs';
import { Tabulator } from 'tabulator-tables';
import { TableComponent } from '../table/table.component';
import { ItabulatorData } from '../interfaces/tabulator.interface';
import { TabulatorSharedConfigService } from './tabulator-shared-config.service';

@Injectable({
    providedIn: 'root',
})
export class TabulatorService {
    public showCopyMsg = false;

    constructor(
        private readonly clipboardApi: ClipboardService,
        private readonly sharedTabulatorConfig: TabulatorSharedConfigService
    ) {
        this.copyVisibilityChange$.subscribe((value) => {
            this.showCopyMsg = value;
        });
    }

    public copyVisibilityChange$: Subject<boolean> = new Subject<boolean>();

    public copyToClipboard(table: Tabulator) {
        const data = table.getData('active');
        this.clipboardApi.copyFromContent(JSON.stringify(data));
        this.copyVisibilityChange$.next(true);
        setTimeout(() => {
            this.copyVisibilityChange$.next(false);
        }, 2500);
    }

    public generateTableByComponent(
        component: TableComponent,
        tableClass: string
    ) {
        const tabulatorData = {
            // table: component.table,
            tableData: component.tableData,
            columnNames: component.columnNames,
            tabulatorModules: component.tabulatorModules,
            tabulatorOptions: component.tabulatorOptions,
        };

        return this.drawTable(tabulatorData, tableClass);
    }

    public joinColumnsWithSharedSettings(
        tabulatorColumnsOptions: Tabulator.ColumnDefinition[]
    ) {
        return tabulatorColumnsOptions.map((tabulatorColumnOptions) => ({
            ...this.sharedTabulatorConfig.sharedColumnsOptions,
            ...tabulatorColumnOptions,
        }));
    }

    public drawTable(
        tabulatorData: ItabulatorData,
        tableClass: string
    ): Tabulator {
        const tab = document.createElement('div');
        const { tableData, columnNames, tabulatorOptions, tabulatorModules } =
            tabulatorData;

        tab.classList.add('table-striped');
        
        Tabulator.registerModule(tabulatorModules);

        const table = new Tabulator(tab, {
            ...this.sharedTabulatorConfig.tabulatorOptions(tabulatorOptions),
            data: tableData,
            columns: this.joinColumnsWithSharedSettings(columnNames),
        });

        document.getElementById(tableClass)!.appendChild(tab);

        return table;
    }
}
