import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  EditModule,
  FilterModule,
  PageModule,
  SortModule,
  Tabulator,
} from 'tabulator-tables';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss'],
})
export class TranslatorComponent implements AfterViewInit, OnChanges {
  constructor(private clipboardApi: ClipboardService) {}
  private table!: Tabulator;
  public showCopyMsg = false

  @Input() tableData: any[] = [
    {
      table: 'SDASFAF',
      field: 'ASFSAFDSAF',
      hebrew: '1731',
      category: 'zxc',
      subcategory: 'bank',
    },
    {
      table: 'ZRDFGG',
      field: 'ZXC',
      hebrew: "r}'10 ",
      category: 'zxc',
      subcategory: 'branch',
    },
    {
      table: 'ADFGADSFGD',
      field: 'ASC',
      hebrew: '1131M',
      category: 'zxc',
      subcategory: 'account',
    },
    {
      table: 'ASDGASDG',
      field: 'ASCASS',
      hebrew: 'Iilwn aio',
      category: 'cat1',
      subcategory: 'accountTypel',
    },
    {
      table: 'SADGASDG',
      field: 'AVW',
      hebrew: '190n axii7a',
      category: 'ACK-ACK!',
      subcategory: 'loanld',
    },
    {
      table: 'ASDGASDGAS',
      field: 'ASVASVA',
      hebrew: 'nlio 19on',
      category: 'ACK-ACK!',
      subcategory: '',
    },
    {
      table: 'ZDBFSBG',
      field: 'ASGSH',
      hebrew: '0117wri',
      category: 'cat1',
      subcategory: 'type',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG!',
      field: 'ASSGSDFGAS',
      hebrew: "שלום!",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ASEG',
      field: 'ASSGSDFGAS',
      hebrew: "Deron Di' ",
      category: 'cat1',
      subcategory: 'day',
    },
    {
      table: 'ZDBFSBG',
      field: 'AGDSFGDFH',
      hebrew: 'iiwro',
      category: 'cat1',
      subcategory: 'first',
    },
    {
      table: 'ZDBFSBG',
      field: 'ADFHDFHH',
      hebrew: 'nry-rn',
      category: 'cat1',
      subcategory: 'frequency',
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
      title: 'טבלא',
      field: 'table',
      ...this.sharedColumnOptions,
    },
    {
      title: 'שדה',
      field: 'field',
      ...this.sharedColumnOptions,
    },
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
      title: 'קטגוריית משנה',
      field: 'subcategory',
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
      data: this.tableData,
      columns: this.columnNames,
      height: this.height,
      maxHeight: '415px',
      minHeight: '30vh',
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
    document.getElementById('translator-table-wrapper')!.appendChild(this.tab);
  }
  // ngOnInit(): void {}
}
