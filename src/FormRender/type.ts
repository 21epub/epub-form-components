import { StoreValue } from 'antd/lib/form/interface';
import { OptionsConfigType } from '../FormComponents';

// 每个组件的类型Í
export interface ComponentType {
  // 每个组件的唯一标识id
  id: string;
  // 每个组件显示的标题
  label: string;
  // 组件对应的name，单个表单中的区分组件的唯一标识，语义化,与接口对应属性字段相同
  name: string;
  // 组件的类型
  type: string;
  // 组件的参数集合
  props?: {
    // 占位提示语
    placeholder?: string;
    // 默认值
    value?: StoreValue;
    // 选项组件的配置
    optionsConfig?: OptionsConfigType;
    // 自定义属性
    [key: string]: Any;
  };
}

export interface DataType {
  [key: string]: StoreValue;
}
