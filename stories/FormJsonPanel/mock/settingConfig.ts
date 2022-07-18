import type { PanelConfigType } from '../../../src/FormJsonPanel/index';
import type { RuleObject } from 'antd/lib/form';

export const jsonPanelSetting: PanelConfigType = {
  type: 'Tabs',
  tabs: [
    {
      tabsName: '基本设置',
      componentList: [
        {
          name: 'Collapse',
          type: 'CollapseWidget',
          props: {
            ghost: false,
            styled: {
              '.ant-collapse-header': {
                padding: '4px!important',
              },
            },
          },
          children: [
            {
              name: 'CollapsePanel1',
              type: 'CollapsePanelWidget',
              children: [
                {
                  name: 'warning1',
                  type: 'AlertWidget',
                  props: {
                    message: '这是一个折叠框',
                    type: 'success',
                    showIcon: true,
                  },
                  styled: {
                    margin: '0px',
                  },
                },
              ],
            },
            {
              name: 'CollapsePanel2',
              type: 'CollapsePanelWidget',
              children: [
                {
                  name: 'info1',
                  type: 'AlertWidget',
                  props: {
                    message: '这是一个折叠框',
                    type: 'info',
                    showIcon: true,
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'Row',
          type: 'RowWidget',
          props: {
            wrap: false,
            styled: {
              '.ant-col': {
                color: '#666699',
                '&': {
                  '.ant-alert-message': {
                    'font-size': '12px',
                  },
                },
              },
            },
          },
          children: [
            {
              name: 'Col1',
              type: 'ColWidget',
              props: {
                span: 8,
              },
              children: [
                {
                  name: 'success1',
                  type: 'AlertWidget',
                  props: {
                    message: '这里是一条成功提示信息',
                    type: 'success',
                    showIcon: true,
                  },
                },
              ],
            },
            {
              name: 'Col2',
              type: 'ColWidget',
              props: {
                span: 8,
              },
              children: [
                {
                  name: 'warning2',
                  type: 'AlertWidget',
                  props: {
                    message: '这里是一条警告提示信息',
                    type: 'warning',
                    showIcon: true,
                  },
                },
                {
                  name: 'error',
                  type: 'AlertWidget',
                  props: {
                    message: '这里是一条错误提示信息',
                    type: 'error',
                    showIcon: true,
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'warning5',
          type: 'AlertWidget',
          props: {
            message: '这里是一条警告提示信息',
            type: 'warning',
            showIcon: true,
          },
        },
        {
          label: '日期范围输入框',
          name: 'RangePicker',
          type: 'FormRangePicker',
        },
        {
          label: '活动标题',
          name: 'title',
          type: 'FormInput',
          rules: [
            { required: true, message: '不能为空' },
            {
              validator: (_rule: RuleObject, value: any) => {
                if (value === '标题') {
                  return Promise.reject(new Error('标题不能设置为标题'));
                } else {
                  return Promise.resolve(new Error());
                }
              },
            },
          ],
          props: {
            placeholder: '请输入活动标题',
          },
        },
        {
          label: '活动规则说明',
          name: 'rules',
          type: 'FormRichText',
          props: {
            placeholder: '请输入活动规则',
          },
        },
      ],
    },
    {
      tabsName: '规则设置',
      componentList: [
        {
          label: '抽奖规则',
          name: 'draw_rule',
          type: 'FormSelect',
          props: {
            placeholder: '请选择规则',
            optionsConfig: {
              type: 'Radio',
              defaultValue: 'total',
              options: [
                {
                  label: '总计',
                  value: 'total',
                  checked: false,
                  id: '0',
                },
                {
                  label: '每天',
                  value: 'everyday',
                  checked: false,
                  id: '1',
                },
              ],
            },
          },
        },
        {
          label: '每人最多抽中次数',
          name: 'win_num_each_one',
          type: 'FormSelect',
          props: {
            placeholder: '请选择每人最多抽中次数',
            optionsConfig: {
              type: 'Radio',
              defaultValue: 'null',
              options: [
                { label: '1', value: '1', checked: false, id: '0' },
                { label: '2', value: '2', checked: false, id: '1' },
                { label: '3', value: '3', checked: false, id: '2' },
                { label: '4', value: '4', checked: false, id: '3' },
                { label: '5', value: '5', checked: false, id: '4' },
                {
                  label: '不限',
                  value: 'null',
                  checked: false,
                  id: '5',
                },
              ],
            },
          },
        },
        {
          label: '显示活动时间',
          name: 'show_activity',
          type: 'FormSwitch',
        },
      ],
    },
    {
      tabsName: '表单设置',
      componentList: [
        {
          label: '收集用户信息',
          name: 'need_user_info',
          type: 'FormSwitch',
          props: {
            checked: false,
          },
          children: [
            {
              label: '姓名',
              name: 'name',
              type: 'FormInput',
            },
            {
              label: '性别',
              name: 'sex',
              type: 'FormRadio',
              props: {
                optionsConfig: {
                  type: 'Radio',
                  defaultValue: '0',
                  options: [
                    { label: '男', value: '0', checked: false, id: '0' },
                    { label: '女', value: '1', checked: false, id: '1' },
                  ],
                },
              },
            },
            {
              label: '个人简介',
              name: 'introduction',
              type: 'FormTextArea',
            },
          ],
        },
      ],
    },
    {
      tabsName: '表格设置',
      componentList: [
        {
          label: '信息列表',
          name: 'Table',
          type: 'FormTable',
          props: {
            columns: [
              {
                title: '序号',
                dataIndex: 'key',
                width: '100px',
                align: 'center',
              },
              {
                title: '信息',
                dataIndex: 'message',
                align: 'center',
              },
            ],
            componentList: [
              {
                label: '信息',
                name: 'message',
                type: 'FormTextArea',
                rules: [{ required: true, message: '不能为空' }],
              },
            ],
          },
        },
      ],
    },
  ],
};
