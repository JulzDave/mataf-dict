import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    EditModule,
    FilterModule,
    Module,
    PageModule,
    ResponsiveLayoutModule,
    SortModule,
    Tabulator,
} from 'tabulator-tables';
import { UNKWONWN_ROUTE_DATASOURCE } from '../constants/constants';
import {
    DICT_STUB,
    TdataSource,
    TRANSLATOR_STUB,
} from '../constants/stubs.constants';
import { TabulatorService } from '../tabulator/tabulator.service';

const CLASS_NAME = 'table-wrapper';

@Component({
    selector: 'app-dict',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
    constructor(
        private readonly tabulatorService: TabulatorService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    fetchData(): TdataSource {
        switch (this.router.url) {
            case '/dict':
                return DICT_STUB;
            case '/translator':
                return TRANSLATOR_STUB;
            default:
                throw UNKWONWN_ROUTE_DATASOURCE as Error;
        }
    }
    public data: TdataSource = this.fetchData();

    // Table data goes here:
    public tableData: Record<string, string>[] = this.data.TABLE_DATA_STUB;

    // Column configurations go here:
    public columnNames: Tabulator.ColumnDefinition[] =
        this.data.COLUMN_NAMES_STUB;

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
        setTimeout(() => {
            this.activatedRoute.params.subscribe((val: any) => {
                this.table = this.tabulatorService.generateTableByComponent(
                    this,
                    CLASS_NAME
                );
            });
        }, 0);
    }

    public ngOnInit() {}

    public copyToClipboard() {
        this.tabulatorService.copyToClipboard(this.table);
    }
}
