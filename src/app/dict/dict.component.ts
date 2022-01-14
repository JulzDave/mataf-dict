import {
    AfterViewInit,
    Component,
    Input,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { Tabulator } from 'tabulator-tables';
import {
    DICT_COLUMN_NAMES_STUB,
    DICT_TABLE_DATA_STUB as DICT_TABLE_DATA_STUB,
    TdictTableData,
} from '../constants/stubs.constants';
import { TabulatorService } from '../tabulator.service';

@Component({
    selector: 'app-dict',
    templateUrl: './dict.component.html',
    styleUrls: ['./dict.component.scss'],
})
export class DictComponent implements AfterViewInit, OnChanges {
    constructor(private readonly tabulatorService: TabulatorService) {}

    private table!: Tabulator;

    get showCopyMsg(): boolean {
        return this.tabulatorService.showCopyMsg;
    }

    @Input() private tableData: TdictTableData[] = DICT_TABLE_DATA_STUB;

    private sharedColumnOptions: Partial<Tabulator.ColumnDefinition> = {
        ...this.tabulatorService.sharedColumnOptions,
    };

    @Input() private columnNames: Tabulator.ColumnDefinition[] =
        DICT_COLUMN_NAMES_STUB.map((col) => ({
            ...this.sharedColumnOptions,
            ...col,
        }));

    private tab = document.createElement('div');

    public ngAfterViewInit(): void {
        this.startTable();
    }

    public ngOnChanges(_changes: SimpleChanges): void {
        this.startTable();
    }

    private startTable() {
        const tableClass = 'dict-table-wrapper';
        const { tab, table, tableData, columnNames } = this;
        const tabulatorData = {
            tab,
            table,
            tableData,
            columnNames,
        };

        this.tabulatorService.TabulatorTableGenerator(
            tabulatorData,
            tableClass
        );
    }

    public copyToClipboard() {
        this.tabulatorService.copyToClipboard(this.table);
    }
}
