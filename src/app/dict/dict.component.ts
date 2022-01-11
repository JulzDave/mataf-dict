import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  Tabulator,
  PageModule,
  SortModule,
  FilterModule,
  EditModule,
} from 'tabulator-tables';

@Component({
  selector: 'app-dict',
  templateUrl: './dict.component.html',
  styleUrls: ['./dict.component.scss'],
})
export class DictComponent implements AfterViewInit, OnChanges {
  constructor() {}

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
  @Input() height: string = '415px';
  tab = document.createElement('div');

  ngAfterViewInit(): void {
    this.drawTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.drawTable();
  }

  private drawTable(): void {
    this.tab.classList.add('table-striped');

    Tabulator.registerModule([
      PageModule,
      SortModule,
      FilterModule,
      EditModule,
    ]);
    const table = new Tabulator(this.tab, {
      textDirection: 'rtl',
      layout: 'fitColumns',
      pagination: true,
      paginationMode: 'local',
      paginationSize: 6,
      // paginationSizeSelector: [3, 6, 8, 10],
      // movableColumns: true,
      data: this.tableData,
      columns: this.columnNames,
      height: this.height,
      maxHeight: '415px',
      minHeight: '30vh',
      locale: true,
      langs: {
        en: {
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

    document.getElementById('my-tabular-table')!.appendChild(this.tab);
  }
  // ngOnInit(): void {}
}
