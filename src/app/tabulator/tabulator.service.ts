import { Injectable } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { Subject } from 'rxjs';
import { Tabulator } from 'tabulator-tables';
import { DictComponent } from '../dict/dict.component';
import { ItabulatorData } from '../interfaces/tabulator.interface';
import { TranslatorComponent } from '../translator/translator.component';
import { TabulatorSharedConfigService } from './tabulator-shared-config.service';

@Injectable({
    providedIn: 'root',
})
export class TabulatorService {
    public showCopyMsg = false;

    constructor(
        private readonly clipboardApi: ClipboardService,
        private readonly sharedTabulatorConfig: TabulatorSharedConfigService,
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
        component: DictComponent | TranslatorComponent,
        tableClass: string
    ) {
        const tabulatorData = {
            // tab: component.tab,
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
        const tab = document.createElement('div');
        const { tableData, columnNames, tabulatorOptions, tabulatorModules } =
            tabulatorData;
        tab.classList.add('table-striped');
        Tabulator.registerModule(tabulatorModules);

        tabulatorData.table = new Tabulator(tab, {
            ...this.sharedTabulatorConfig.tabulatorOptions(tabulatorOptions),
            data: tableData,
            columns: columnNames,
        });

        document.getElementById(tableClass)!.appendChild(tab);

        return tabulatorData.table;
    }
}
