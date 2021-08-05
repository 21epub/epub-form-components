import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import type { MonacoEditorProps } from 'react-monaco-editor';
import { Wrapper } from './Styled';

/**
 * @param color 需要透明度时请传入 rgba 格式的颜色数值
 * @param onChange 颜色值修改时回调
 * @param onChangeComplete 颜色值修改完成时回调
 */
export interface MonacoEditorWidgetProps extends MonacoEditorProps {
  width?: string;
  height?: string;
  value?: string;
  language?: string;
  theme?: string;
  onChange: (v: string) => void;
}

const MonacoEditorWidget: React.FC<MonacoEditorWidgetProps> = (props) => {
  const options = {};
  const {
    value = '',
    width = '100%',
    height = '350px',
    language = 'json',
    theme = 'vs-dark',
    onChange,
    ...rest
  } = props;

  const onMonacoEditorChange = (value: string) => {
    onChange(value);
  };

  return (
    <Wrapper className='MonacoEditorWidget'>
      <MonacoEditor
        width={width}
        height={height}
        language={language}
        theme={theme}
        defaultValue={value}
        options={options}
        onChange={onMonacoEditorChange}
        {...rest}
      />
    </Wrapper>
  );
};

export default MonacoEditorWidget;
