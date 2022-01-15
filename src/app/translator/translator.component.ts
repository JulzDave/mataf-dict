import {
    AfterViewInit,
    Component,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import {
    EditModule,
    FilterModule,
    Module,
    PageModule,
    ResponsiveLayoutModule,
    SortModule,
    Tabulator,
} from 'tabulator-tables';
import {
    TRANSLATOR_COLUMN_NAMES_STUB,
    TRANSLATOR_TABLE_DATA_STUB,
    TtranslatorTableData,
} from '../constants/stubs.constants';
import { TabulatorService } from '../tabulator/tabulator.service';

const CLASS_NAME = 'translator-table-wrapper';

@Component({
    selector: 'app-translator',
    templateUrl: './translator.component.html',
    styleUrls: ['./translator.component.scss'],
})
export class TranslatorComponent implements AfterViewInit, OnChanges {
    constructor(private readonly tabulatorService: TabulatorService) {}

    // Table data goes here:
    public tableData: TtranslatorTableData[] = TRANSLATOR_TABLE_DATA_STUB;

    // Column configurations go here:
    public columnNames: Tabulator.ColumnDefinition[] = TRANSLATOR_COLUMN_NAMES_STUB

    public tabulatorModules: Module[] = [
        // Modules go here... (required)

        PageModule,
        SortModule,
        EditModule,
        FilterModule,
        ResponsiveLayoutModule,
    ];

    public tabulatorOptions: Tabulator.Options = {
        // Optional tabulator configurations go here...
    };

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
