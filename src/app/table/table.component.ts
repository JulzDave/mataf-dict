import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module, Tabulator } from 'tabulator-tables';
import { DataService } from '../data/data.service';
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
        private readonly dataService: DataService,
        private readonly activatedRoute: ActivatedRoute
    ) {}

    public data = this.dataService.fetchData();

    public tableData: Record<string, string>[] = this.data.TABLE_DATA_STUB;

    public columnNames: Tabulator.ColumnDefinition[] =
        this.data.COLUMN_NAMES_STUB;

    public tabulatorModules: Module[] = this.data.TABLE_MODULES;

    public tabulatorOptions = this.data.TABLE_OPTIONS;

    public table!: Tabulator;

    get showCopyMsg(): boolean {
        return this.tabulatorService.showCopyMsg;
    }

    public ngAfterViewInit(): void {
        this.activatedRoute.params.subscribe(() => {
            setTimeout(() => {
                this.table = this.tabulatorService.generateTableByComponent(
                    this,
                    CLASS_NAME
                );
            }, 0);
        });
    }

    public copyToClipboard() {
        this.tabulatorService.copyToClipboard(this.table);
    }
}
