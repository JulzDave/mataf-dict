import { Tabulator } from 'tabulator-tables';

export type TdictTableData = Record<'hebrew' | 'category' | 'english', string>;

export type TdataSource = {
    TABLE_DATA_STUB: Record<string, string>[];
    COLUMN_NAMES_STUB: Required<Tabulator.ColumnDefinition[]>;
};

export const DICT_STUB: TdataSource = {
    TABLE_DATA_STUB: [
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
    ],

    COLUMN_NAMES_STUB: [
        {
            title: 'עברית',
            field: 'hebrew',
        },
        {
            title: 'קטגוריה',
            field: 'category',
        },
        {
            title: 'אנגלית',
            field: 'english',
        },
    ],
};

export type TtranslatorTableData = Record<
    'table' | 'field' | 'hebrew' | 'category' | 'subcategory',
    string
>;

export const TRANSLATOR_STUB: TdataSource = {
    TABLE_DATA_STUB: [
        {
            table: 'SDASFAF',
            field: 'ASFSAFDSAFASFSAFDSAFASFSAFDSAFASFSAFDSAFASFSAFDSAFASFSAFDSAFASFSAFDSAFASFSAFDSAFASFSAFDSAFASFSAFDSAF',
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
            hebrew: 'שלום!',
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
    ],
    COLUMN_NAMES_STUB: [
        {
            title: 'טבלא',
            field: 'table',
        },
        {
            title: 'שדה',
            field: 'field',
        },
        {
            title: 'עברית',
            field: 'hebrew',
        },
        {
            title: 'קטגוריה',
            field: 'category',
        },
        {
            title: 'קטגוריית משנה',
            field: 'subcategory',
        },
    ],
};
