import {
    AfterViewInit,
    Component,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { Module, Tabulator } from 'tabulator-tables';
import {
    TRANSLATOR_COLUMN_NAMES_STUB,
    TRANSLATOR_TABLE_DATA_STUB,
    TtranslatorTableData,
} from '../constants/stubs.constants';
import { TabulatorService } from '../tabulator.service';

const CLASS_NAME = 'translator-table-wrapper';

@Component({
    selector: 'app-translator',
    templateUrl: './translator.component.html',
    styleUrls: ['./translator.component.scss'],
})
export class TranslatorComponent implements AfterViewInit, OnChanges {
    constructor(private readonly tabulatorService: TabulatorService) {}

    public table!: Tabulator;

    get showCopyMsg(): boolean {
        return this.tabulatorService.showCopyMsg;
    }

    public tableData: TtranslatorTableData[] = TRANSLATOR_TABLE_DATA_STUB;

    private sharedColumnOptions: Partial<Tabulator.ColumnDefinition> = {
        ...this.tabulatorService.sharedColumnOptions,
    };

    public columnNames: Tabulator.ColumnDefinition[] =
        TRANSLATOR_COLUMN_NAMES_STUB.map((col) => ({
            ...this.sharedColumnOptions,
            ...col,
        }));

    public tab = document.createElement('div');

    public tabulatorModules: Module[] = [];
    public tabulatorOptions: Tabulator.Options = {};

    public ngAfterViewInit(): void {
        this.table = this.tabulatorService.generateTableByComponent(
            this,
            CLASS_NAME
        );
    }

    public ngOnChanges(_changes: SimpleChanges): void {
        this.table = this.tabulatorService.generateTableByComponent(
            this,
            CLASS_NAME
        );
    }

    public copyToClipboard() {
        this.tabulatorService.copyToClipboard(this.table);
    }
}
