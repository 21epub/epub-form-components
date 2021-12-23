import React from 'react';
import MonacoEditor, { loader } from '@monaco-editor/react';
import type { EditorProps, OnChange } from '@monaco-editor/react';
import { useDebounceFn } from 'ahooks';
import { Wrapper } from './Styled';

loader.config({
  paths: {
    vs: `https://unpkg.creatby.com/monaco-editor@0.28.1/min/vs`
  }
});

// 防抖配置类型
export interface DebounceOptions {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
}

export interface MonacoEditorWidgetProps extends EditorProps {
  // 防抖延迟时间（毫秒）
  debounceOptions?: DebounceOptions;
}

const MonacoEditorWidget: React.FC<MonacoEditorWidgetProps> = (props) => {
  const {
    debounceOptions = { wait: 100 },
    value = '',
    defaultLanguage = 'javascript',
    theme = 'vs-dark',
    onChange,
    ...rest
  } = props;

  // onChange封装
  const onEditorChange: OnChange = (editorValue, ev) => {
    if (onChange) onChange(editorValue, ev);
  };

  // 防抖操作
  const { run } = useDebounceFn(onChange || onEditorChange, debounceOptions);

  return (
    <Wrapper className='MonacoEditorWidget'>
      <MonacoEditor
        defaultLanguage={defaultLanguage}
        theme={theme}
        defaultValue={value || ''}
        onChange={run}
        {...rest}
      />
    </Wrapper>
  );
};

export default MonacoEditorWidget;
