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
  Tabulator,
} from 'tabulator-tables';

@Component({
  selector: 'app-dict',
  templateUrl: './dict.component.html',
  styleUrls: ['./dict.component.scss'],
})
export class DictComponent implements AfterViewInit, OnChanges {
  constructor(private clipboardApi: ClipboardService) {}

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
    width: 150,
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
  @Input() height: string = '100%';
  tab = document.createElement('div');

  ngAfterViewInit(): void {
    this.drawTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
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
    ]);
    this.table = new Tabulator(this.tab, {
      textDirection: 'rtl',
      layout: 'fitColumns',
      pagination: true,
      paginationMode: 'local',
      paginationSize: 7,
      // paginationSizeSelector: [3, 6, 8, 10],
      // movableColumns: true,
      data: this.tableData,
      columns: this.columnNames,
      height: this.height,
      maxHeight: this.height,
      // minHeight: '30vh',
      locale: true,
      langs: {
        'en-gb': {
          pagination: {
            page_size: 'Page Size',
            page_title: 'Show Page',
            first: '<<',
            first_title: 'עמוד ראשון',
            last: '>>',
            last_title: 'עמוד אחרון',
            prev: '<',
            prev_title: 'עמוד קודם',
            next: '>',
            next_title: 'עמוד הבא',
          },
        },
      },
    });

    document.getElementById('dict-table-wrapper')!.appendChild(this.tab);
  }
  // ngOnInit(): void {}
}
