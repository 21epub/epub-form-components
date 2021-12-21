// 需要传入组件的字段。这里的所有字段，都会被视为组件的props
const includeField = ['picture'];

// 格式化参数， key转为小写，boolean值转为string
export const formatProps = (props: any) => {
  const newProps: any = {};
  Object.entries(props).map(([key, value]) => {
    if (includeField.includes(key)) {
      newProps[key] = value;
    }
  });
  return newProps;
};
