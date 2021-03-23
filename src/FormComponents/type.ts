import { CheckboxValueType } from 'antd/lib/checkbox/Group';

export interface Options {
  label: string;
  value: CheckboxValueType;
  checked: boolean;
  index: number;
}

export interface OptionsConfig {
  type: string;
  defaultValue: CheckboxValueType[] | string;
  options: Options[];
}
