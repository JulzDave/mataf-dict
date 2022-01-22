import { AfterViewInit, Component } from '@angular/core';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    Router,
} from '@angular/router';
import { Tabulator } from 'tabulator-tables';
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
        private readonly activatedRoute: ActivatedRoute,
        private readonly router: Router
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = (
            future: ActivatedRouteSnapshot,
            curr: ActivatedRouteSnapshot
        ) => {
            return future.url === null && curr.url === null;
        };
    }
    public data = this.dataService.fetchData();
    public tableData: Record<string, string>[] = this.data.TABLE_DATA_STUB;
    public columnNames = this.data.COLUMN_NAMES_STUB;
    public tabulatorModules = this.data.TABLE_MODULES;
    public tabulatorOptions = this.data.TABLE_OPTIONS;
    public loading = true;
    public table!: Tabulator;

    get showCopyMsg(): boolean {
        return this.tabulatorService.showCopyMsg;
    }

    public removeCopyMsg() {
        this.tabulatorService.turnOffMsgFlag();
    }

    public ngAfterViewInit(): void {
        this.activatedRoute.params.subscribe(() => {
            setTimeout(() => {
                this.table = this.tabulatorService.generateTable(
                    this,
                    CLASS_NAME
                );
                this.loading = false;
            }, 0);
        });
    }
 
    public copyToClipboard() {
        this.tabulatorService.copyToClipboard(this.table);
    }
}
