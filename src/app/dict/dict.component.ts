import {
    AfterViewInit,
    Component,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { Module, Tabulator } from 'tabulator-tables';
import {
    DICT_COLUMN_NAMES_STUB,
    DICT_TABLE_DATA_STUB as DICT_TABLE_DATA_STUB,
    TdictTableData,
} from '../constants/stubs.constants';
import { TabulatorService } from '../tabulator.service';

const CLASS_NAME = 'dict-table-wrapper';

@Component({
    selector: 'app-dict',
    templateUrl: './dict.component.html',
    styleUrls: ['./dict.component.scss'],
})
export class DictComponent implements AfterViewInit, OnChanges {
    constructor(private readonly tabulatorService: TabulatorService) {}

    //? -------- TABLE DATA INSERTION --------

    public tableData: TdictTableData[] = [
        // table data goes here...

        ...DICT_TABLE_DATA_STUB,
    ];

    private tabulatorColumnsOptions: Tabulator.ColumnDefinition[] = [
        // Optional column configurations go here...

        ...DICT_COLUMN_NAMES_STUB,
    ];

    //? -------- TABLE CONFIGURATION INSERTION --------

    public tabulatorModules: Module[] = [
        // Optional modules go here...
    ];

    public tabulatorOptions: Tabulator.Options = {
        // Optional tabulator configurations go here...
    };

    

    public columnNames: Tabulator.ColumnDefinition[] =
        this.tabulatorColumnsOptions.map((tabulatorColumnOptions) => ({
            ...this.tabulatorService.sharedColumnsOptions,
            ...tabulatorColumnOptions,
        }));

    public table!: Tabulator;

    get showCopyMsg(): boolean {
        return this.tabulatorService.showCopyMsg;
    }

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
