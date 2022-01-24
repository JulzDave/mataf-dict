import { Injectable } from '@angular/core';
import { Tabulator } from 'tabulator-tables';
import { ItabulatorData } from '../interfaces/tabulator.interface';
import { TableComponent } from '../table/table.component';
import { TabulatorSharedConfigService } from './tabulator-shared-config.service';

@Injectable({
    providedIn: 'root',
})
export class TabulatorService {
    constructor(
        private readonly sharedTabulatorConfig: TabulatorSharedConfigService
    ) {}

    public generateTable(component: TableComponent, tableClass: string) {
        const { tableData, columnNames, tabulatorModules, tabulatorOptions } =
            component;
        const tabulatorData = {
            tableData,
            columnNames,
            tabulatorModules,
            tabulatorOptions,
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
