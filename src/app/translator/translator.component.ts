import {
    AfterViewInit,
    Component,
    Input,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { Tabulator } from 'tabulator-tables';
import {
    TRANSLATOR_COLUMN_NAMES_STUB,
    TRANSLATOR_TABLE_DATA_STUB,
    TtranslatorTableData,
} from '../constants/stubs.constants';
import { TabulatorService } from '../tabulator.service';

@Component({
    selector: 'app-translator',
    templateUrl: './translator.component.html',
    styleUrls: ['./translator.component.scss'],
})
export class TranslatorComponent implements AfterViewInit, OnChanges {
    constructor(private readonly tabulatorService: TabulatorService) {}

    private table!: Tabulator;

    get showCopyMsg(): boolean {
        return this.tabulatorService.showCopyMsg;
    }

    @Input() private tableData: TtranslatorTableData[] =
        TRANSLATOR_TABLE_DATA_STUB;

    private sharedColumnOptions: Partial<Tabulator.ColumnDefinition> = {
        ...this.tabulatorService.sharedColumnOptions,
    };

    @Input() private columnNames: Tabulator.ColumnDefinition[] =
        TRANSLATOR_COLUMN_NAMES_STUB.map((col) => ({
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

    public copyToClipboard() {
        this.tabulatorService.copyToClipboard(this.table);
    }

    private startTable() {
        const tableClass = 'translator-table-wrapper';
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
}
