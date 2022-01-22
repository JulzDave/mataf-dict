import {
    AfterViewInit,
    Component,
    OnInit,
    ViewContainerRef,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    Router,
} from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { Tabulator } from 'tabulator-tables';
import { AppStateService } from '../app-state.service';
import { DataService } from '../data/data.service';
import { TabulatorService } from '../tabulator/tabulator.service';
ViewContainerRef;
const CLASS_NAME = 'table-wrapper';

@Component({
    selector: 'app-dict',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit, OnInit {
    constructor(
        private readonly tabulatorService: TabulatorService,
        private readonly appService: AppStateService,
        private readonly dataService: DataService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly router: Router,
        private readonly clipboardApi: ClipboardService,
        private snackBar: MatSnackBar
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
    public currentFeedbackMessage: string = 'השדות הנבחרים הועתקו';
    private sideBarState!: string;

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

    public openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2500,
            panelClass: [
                this.sideBarState === 'open'
                    ? 'snackbar-when-side-bar-is-opened'
                    : 'custom-snackbar',
                'custom-snackbar',
            ],
        });
    }

    public cleanTable() {
        this.currentFeedbackMessage = 'הסינון הוסר';
        this.table.clearFilter(true);
        this.openSnackBar(this.currentFeedbackMessage, 'סגור');
    }

    public copyToClipboard() {
        this.currentFeedbackMessage = 'השדות הנבחרים הועתקו';
        const data = this.table.getData('active');
        this.clipboardApi.copyFromContent(JSON.stringify(data));
        this.openSnackBar(this.currentFeedbackMessage, 'סגור');
    }
    ngOnInit() {
        this.appService.currentSideBarState$.subscribe(
            (sideBarState) => (this.sideBarState = sideBarState)
        );
    }
}
