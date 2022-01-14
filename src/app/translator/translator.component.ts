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
import { TabulatorSharedConfigService } from '../tabulator/tabulator-shared-config.service';
import { TabulatorService } from '../tabulator/tabulator.service';

const CLASS_NAME = 'translator-table-wrapper';

@Component({
    selector: 'app-translator',
    templateUrl: './translator.component.html',
    styleUrls: ['./translator.component.scss'],
})
export class TranslatorComponent implements AfterViewInit, OnChanges {
    constructor(
        private readonly tabulatorService: TabulatorService,
        private readonly sharedTabulatorConfig: TabulatorSharedConfigService
    ) {}

    //? -------- TABLE DATA INSERTION --------

    public tableData: TtranslatorTableData[] = [
        // table data goes here...

        ...TRANSLATOR_TABLE_DATA_STUB,
    ];

    private tabulatorColumnsOptions: Tabulator.ColumnDefinition[] = [
        // Optional column configurations go here...

        ...TRANSLATOR_COLUMN_NAMES_STUB,
    ];

    //? -------- TABLE CONFIGURATION INSERTION --------

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

    //? -----------------------------------------------

    public columnNames: Tabulator.ColumnDefinition[] =
        this.tabulatorColumnsOptions.map((tabulatorColumnOptions) => ({
            ...this.sharedTabulatorConfig.sharedColumnsOptions,
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
