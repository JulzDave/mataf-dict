import {
    AfterViewInit,
    Component,
    Input,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { Tabulator } from 'tabulator-tables';
import {
    TRANSLATOR_COLUMN_NAMES,
    TRANSLATOR_TABLE_DATA,
} from '../constants/mataf-dict.constants';
import { TabulatorService } from '../tabulator.service';

@Component({
    selector: 'app-translator',
    templateUrl: './translator.component.html',
    styleUrls: ['./translator.component.scss'],
})
export class TranslatorComponent implements AfterViewInit, OnChanges {
    constructor(private stateService: TabulatorService) {}
    private table!: Tabulator;
    get showCopyMsg(): boolean {
        return this.stateService.showCopyMsg;
    }
    @Input() tableData: any[] = TRANSLATOR_TABLE_DATA;
    sharedColumnOptions: Partial<Tabulator.ColumnDefinition> = {
        headerHozAlign: 'center',
        hozAlign: 'center',
        sorter: 'string',
        headerFilter: 'input',
    };
    @Input() columnNames: Tabulator.ColumnDefinition[] =
        TRANSLATOR_COLUMN_NAMES.map((col) => ({
            ...this.sharedColumnOptions,
            ...col,
        }));

    private tab = document.createElement('div');

    ngAfterViewInit(): void {
        this.drawTable();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.drawTable();
    }

    public copyToClipboard() {
        this.stateService.copyToClipboard(this.table);
    }

    private drawTable(): void {
        this.tab.classList.add('table-striped');

        Tabulator.registerModule(this.stateService.tabulatorModules);
        this.table = new Tabulator(this.tab, {
            ...this.stateService.tabulatorOptions,
            data: this.tableData,
            columns: this.columnNames,
        });
        document
            .getElementById('translator-table-wrapper')!
            .appendChild(this.tab);
    }
}
