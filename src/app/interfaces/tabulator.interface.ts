import { Tabulator, Module } from 'tabulator-tables';
import {
    TdictTableData,
    TtranslatorTableData,
} from '../constants/stubs.constants';

export interface ItabulatorData {
    // table: Tabulator;
    tableData: Record<string, string>[];
    columnNames: Tabulator.ColumnDefinition[];
    tabulatorModules: Module[];
    tabulatorOptions: Tabulator.Options;
}
