import type { FC } from 'react';
import React from 'react';
import { Tabs } from 'antd';
import type { FormInstance, TabsProps } from 'antd';
import { FormRender } from '../../FormRender';
import type {
  PanelBaseProps,
  PanelTabsType,
  PanelConfigType,
} from '../../type';
import { Wrapper } from './Styled';
import { styledToString } from '../../FormRender/utils';

export interface SettingPanelProps extends PanelBaseProps {
  tabsProps?: TabsProps;
  settingPanelStyled?: AnyObject;
  onSettingChange: (
    changedValues: AnyObject,
    values: AnyObject,
    form: FormInstance<any>
  ) => void;
}

// 渲染Tabs页
const SettingPanel: FC<SettingPanelProps> = (props) => {
  const {
    settingPanelStyled = {},
    tabsProps,
    panelData,
    panelConfig,
    componentMap,
    onSettingChange,
  } = props;
  const { TabPane } = Tabs;

  // 渲染每个Tabs的面板
  const TabPaneRender = (tabsList?: PanelTabsType[]) => {
    return tabsList?.map((tabs) => {
      return (
        <TabPane key={tabs.id} tab={tabs.tabsName}>
          <FormRender
            initialValues={panelData}
            componentList={tabs.componentList}
            onValuesChange={onSettingChange}
            componentMap={componentMap}
          />
        </TabPane>
      );
    });
  };

  return (
    <Wrapper
      className="SettingPanel"
      styled={styledToString(settingPanelStyled)}
    >
      <Tabs tabPosition="left" {...tabsProps}>
        {TabPaneRender((panelConfig as PanelConfigType)?.tabs)}
      </Tabs>
    </Wrapper>
  );
};

export default SettingPanel;
