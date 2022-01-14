import { Tabulator } from "tabulator-tables";
import { TdictTableData, TtranslatorTableData } from "../constants/stubs.constants";

export interface ItabulatorData {
    tab: HTMLDivElement;
    table: Tabulator;
    tableData: TdictTableData[] | TtranslatorTableData[];
    columnNames: Tabulator.ColumnDefinition[];
}