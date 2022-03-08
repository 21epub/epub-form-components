import React, { useState } from 'react';
import type { TabsProps } from 'antd';
import 'antd/dist/antd.css';
import FormMonacoEditor from '../../../FormComponents/FormMonacoEditor';
import type { PanelBaseProps, PanelConfigType } from '../../type';
import SettingPanel from '../SettingPanel';
import { Wrapper } from './Styled';
import { stringToJson, jsonToString } from '../../utils';
import { styledToString } from '../../FormRender/utils';

export interface EditorPanelProps extends PanelBaseProps {
  tabsProps?: TabsProps;
  editorPanelStyled?: AnyObject;
  onEditorChange: (panelData: string) => void;
}

// 配置面板
const EditorPanel: React.FC<EditorPanelProps> = (props) => {
  const {
    editorPanelStyled = {},
    tabsProps,
    panelData,
    panelConfig,
    monacoLanguage = 'json',
    componentMap,
    onEditorChange,
  } = props;
  const [editorValue, setEditorValue] = useState<PanelConfigType | string>(
    panelConfig || ''
  );
  let returnValues: AnyObject = panelData || {};

  // 每次组件改变时，格式化数据
  const onValuesChange = (changedValues: AnyObject) => {
    returnValues = { ...returnValues, ...changedValues };
  };

  const onMonacoChange = (value?: string) => {
    onEditorChange(value || '');
    setEditorValue(value || '');
  };

  return (
    <Wrapper styled={styledToString(editorPanelStyled)}>
      <FormMonacoEditor
        height="100%"
        defaultLanguage={monacoLanguage}
        value={jsonToString(editorValue)}
        onChange={onMonacoChange}
      />
      <SettingPanel
        tabsProps={tabsProps}
        panelData={returnValues}
        panelConfig={stringToJson(editorValue)}
        componentMap={componentMap}
        onSettingChange={onValuesChange}
      />
    </Wrapper>
  );
};

export default EditorPanel;
