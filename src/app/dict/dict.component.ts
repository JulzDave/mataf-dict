import {
    AfterViewInit,
    Component,
    Input,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { Tabulator } from 'tabulator-tables';
import {
    DICT_COLUMN_NAMES,
    DICT_TABLE_DATA,
} from '../constants/mataf-dict.constants';
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

    @Input() private tableData: any[] = DICT_TABLE_DATA;

    private sharedColumnOptions = {
        ...this.tabulatorService.sharedColumnOptions,
    };

    @Input() private columnNames: Tabulator.ColumnDefinition[] = DICT_COLUMN_NAMES.map(
        (col) => ({
            ...this.sharedColumnOptions,
            ...col,
        })
    );

    private tab = document.createElement('div');

    public ngAfterViewInit(): void {
        this.drawTable();
    }

    public ngOnChanges(_changes: SimpleChanges): void {
        this.drawTable();
    }

    public copyToClipboard() {
        this.tabulatorService.copyToClipboard(this.table);
    }

    private drawTable(): void {
        this.tab.classList.add('table-striped');
        Tabulator.registerModule(this.tabulatorService.tabulatorModules);

        this.table = new Tabulator(this.tab, {
            ...this.tabulatorService.tabulatorOptions,
            data: this.tableData,
            columns: this.columnNames,
        });

        document.getElementById('dict-table-wrapper')!.appendChild(this.tab);
    }
}
