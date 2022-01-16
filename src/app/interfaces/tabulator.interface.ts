import { Module, Tabulator } from 'tabulator-tables';

export interface ItabulatorData {
    // table: Tabulator;
    tableData: Record<string, string>[];
    columnNames: Tabulator.ColumnDefinition[];
    tabulatorModules: Module[];
    tabulatorOptions: Tabulator.Options;
}
