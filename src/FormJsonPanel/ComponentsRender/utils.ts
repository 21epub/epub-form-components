import { isObject } from 'lodash';
import type { StyledType } from '../type';
// 需要传入组件的字段。这里的所有字段，都会被视为组件的props
const includeField = ['picture'];

// 循环遍历styled对象，转为string
const loopStyled = (styledObj: StyledType): string => {
  let returnValue = '';
  Object.entries(styledObj).forEach(([key, value]) => {
    let styledValue = '';
    if (isObject(styledObj[key])) {
      styledValue = loopStyled(styledObj[key] as StyledType);
      returnValue += `${key}${styledValue}`;
    } else {
      styledValue = `${value};`;
      returnValue += `${key}:${styledValue}`;
    }
  });
  return `{${returnValue}}`;
};

/**
 * @name 将对象styled转为styled-components可以运行的字符串
 * @param styled  样式对象 key为css选择器，value为css
 * @returns
 */
export const styledToString = (styled: StyledType): string => {
  if (!styled) return '';
  return `&${loopStyled(styled)}`;
};

// 格式化参数， key转为小写，boolean值转为string
export const formatProps = (props: AnyObject) => {
  const newProps: AnyObject = {};
  Object.entries(props).map(([key, value]) => {
    if (includeField.includes(key)) {
      newProps[key] = value;
    }
  });
  return newProps;
};
