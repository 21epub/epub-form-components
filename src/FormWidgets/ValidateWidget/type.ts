export interface ValidateValue {
  readOnly: boolean;
  isRequired: boolean;
  min: number;
  max: number;
  precision: number;
  [key: string]: boolean | number;
}
