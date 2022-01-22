import { Module, Tabulator } from "tabulator-tables";

export type TdataSource = {
    TABLE_DATA_STUB: Record<string, string>[];
    COLUMN_NAMES_STUB: Required<Tabulator.ColumnDefinition[]>;
    TABLE_MODULES: Module[];
    TABLE_OPTIONS: Partial<Tabulator.Options>;
};

export type TdictTableData = Record<'hebrew' | 'category' | 'english', string>;

export type TtranslatorTableData = Record<
    'table' | 'field' | 'hebrew' | 'category' | 'subcategory',
    string
>;