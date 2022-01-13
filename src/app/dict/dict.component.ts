import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import {
  EditModule,
  FilterModule,
  PageModule,
  SortModule,
  ResizeColumnsModule,
  ResizeRowsModule,
  ResponsiveLayoutModule,
  Tabulator,
} from 'tabulator-tables';
import { StateService } from '../state.service';

@Component({
  selector: 'app-dict',
  templateUrl: './dict.component.html',
  styleUrls: ['./dict.component.scss'],
})
export class DictComponent implements AfterViewInit, OnChanges {
  constructor(
    private clipboardApi: ClipboardService,
    private stateService: StateService
  ) {}

  public showCopyMsg = false;
  private table!: Tabulator;

  @Input() tableData: any[] = [
    {
      hebrew: 'מוצר בר קיימא',
      category: '(כלכלה וסטטיסטיקה)',
      english: 'durable goods',
    },
    { hebrew: 'מסילה', category: '(תחבורה)', english: 'track' },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
    {
      hebrew: 'מוצר גמיש',
      category: '(שיווק ופרסום)',
      english: 'elastic product',
    },
  ];

  sharedColumnOptions: Partial<Tabulator.ColumnDefinition> = {
    headerHozAlign: 'center',
    hozAlign: 'center',
    sorter: 'string',
    headerFilter: 'input',
  };
  @Input() columnNames: Tabulator.ColumnDefinition[] = [
    {
      title: 'עברית',
      field: 'hebrew',
      ...this.sharedColumnOptions,
    },
    {
      title: 'קטגוריה',
      field: 'category',
      ...this.sharedColumnOptions,
    },
    {
      title: 'אנגלית',
      field: 'english',
      ...this.sharedColumnOptions,
    },
  ];
  // @Input() height: string = "40%";
  tab = document.createElement('div');

  ngAfterViewInit(): void {
    this.drawTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.drawTable();
  }

  zxc() {
    this.drawTable();
  }
  public copyToClipboard() {
    const data = this.table.getData('active');
    this.clipboardApi.copyFromContent(JSON.stringify(data));
    this.showCopyMsg = true;
    setTimeout(() => {
      this.showCopyMsg = false;
    }, 2500);
  }

  private drawTable(): void {
    this.tab.classList.add('table-striped');

    Tabulator.registerModule([
      PageModule,
      SortModule,
      FilterModule,
      EditModule,
      ResizeColumnsModule,
      ResizeRowsModule,
      ResponsiveLayoutModule,
    ]);
    this.table = new Tabulator(this.tab, {
      responsiveLayout: true,
      autoResize: true,
      textDirection: 'rtl',
      movableColumns: true,
      layout: 'fitColumns',
      pagination: true,
      paginationMode: 'local',
      paginationSize: 20, //7,
      // paginationSizeSelector: [3, 6, 8, 10],
      // movableColumns: true,
      data: this.tableData,
      columns: this.columnNames,
      // height: "50vh",
      maxHeight: "85vh",
      // minHeight: '30vh',
      locale: true,
      langs: {
        'en-gb': {
          pagination: this.stateService.paginationButtons,
        },
        'en-us': {
          pagination: this.stateService.paginationButtons,
        },
      },
    });

    document.getElementById('dict-table-wrapper')!.appendChild(this.tab);
  }
  // ngOnInit(): void {}
}
