import {
    AfterViewInit,
    Component,
    Input,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { Tabulator } from 'tabulator-tables';
import {
    TRANSLATOR_COLUMN_NAMES,
    TRANSLATOR_TABLE_DATA,
    TtranlatorTableData,
} from '../constants/mataf-dict.constants';
import { TabulatorService } from '../tabulator.service';

@Component({
    selector: 'app-translator',
    templateUrl: './translator.component.html',
    styleUrls: ['./translator.component.scss'],
})
export class TranslatorComponent implements AfterViewInit, OnChanges {
    constructor(private readonly stateService: TabulatorService) {}

    private table!: Tabulator;

    get showCopyMsg(): boolean {
        return this.stateService.showCopyMsg;
    }

    @Input() private tableData: TtranlatorTableData[] = TRANSLATOR_TABLE_DATA;

    private sharedColumnOptions: Partial<Tabulator.ColumnDefinition> = {
        ...this.stateService.sharedColumnOptions,
    };

    @Input() private columnNames: Tabulator.ColumnDefinition[] =
        TRANSLATOR_COLUMN_NAMES.map((col) => ({
            ...this.sharedColumnOptions,
            ...col,
        }));

    private tab = document.createElement('div');

    public ngAfterViewInit(): void {
        this.drawTable();
    }

    public ngOnChanges(_changes: SimpleChanges): void {
        this.drawTable();
    }

    public copyToClipboard() {
        this.stateService.copyToClipboard(this.table);
    }

    private drawTable(): void {
        this.tab.classList.add('table-striped');
        Tabulator.registerModule(this.stateService.tabulatorModules);

        this.table = new Tabulator(this.tab, {
            ...this.stateService.tabulatorOptions,
            data: this.tableData,
            columns: this.columnNames,
        });

        document
            .getElementById('translator-table-wrapper')!
            .appendChild(this.tab);
    }
}
