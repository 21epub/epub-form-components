import React from 'react';
// import { setLocaleData } from 'monaco-editor-nls';
// import zh_CN from 'monaco-editor-nls/locale/zh-hans';
// setLocaleData(zh_CN);
import MonacoEditor from 'react-monaco-editor';
import type { MonacoEditorProps } from 'react-monaco-editor';
import { Wrapper } from './Styled';

const MonacoEditorWidget: React.FC<MonacoEditorProps> = (props) => {
  const {
    value = '',
    width = '100%',
    height = '350px',
    language = 'typescript',
    theme = 'vs-dark',
    options = { selectOnLineNumbers: true },
    ...rest
  } = props;

  return (
    <Wrapper className='MonacoEditorWidget'>
      <MonacoEditor
        width={width}
        height={height}
        language={language}
        theme={theme}
        defaultValue={value || ''}
        options={options}
        {...rest}
      />
    </Wrapper>
  );
};

export default MonacoEditorWidget;