export type ICell =
  | { value: number; correct?: boolean; initial?: boolean }
  | number[];

export interface ICellData {
  val: number;
  row: number;
  col: number;
}

export interface ISelectedCell {
  row: number | null;
  col: number | null;
}
