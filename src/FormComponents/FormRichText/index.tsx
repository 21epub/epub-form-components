import React, { useState } from 'react';
import BraftEditor from 'braft-editor';
import type { BraftEditorProps, EditorState } from 'braft-editor';
import 'braft-editor/dist/index.css';
import { Wrapper } from './Styled';

export interface FormRichTextProps extends BraftEditorProps {}

// 富文本编辑器
const FormRichText: React.FC<FormRichTextProps> = (props) => {
  const { value, onChange, ...rest } = props;
  const [editorState, setEditorState] = useState<EditorState>(
    BraftEditor.createEditorState(value)
  );

  // 在编辑器修改数据时触发
  const handleEditorChange = (editorStateValue: EditorState) => {
    setEditorState(editorStateValue);
    // 调用editorState.toHTML()来获取HTML格式的内容，保存html格式的数据
    const htmlContent = editorStateValue.toHTML();
    onChange && onChange(htmlContent);
  };

  return (
    <Wrapper className='my-component'>
      <BraftEditor
        value={editorState}
        onChange={handleEditorChange}
        {...rest}
      />
    </Wrapper>
  );
};

export default FormRichText;
