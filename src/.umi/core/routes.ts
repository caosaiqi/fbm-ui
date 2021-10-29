// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/elikeji/work/fbm-ui/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('/Users/elikeji/work/fbm-ui/node_modules/@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('/Users/elikeji/work/fbm-ui/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('/Users/elikeji/work/fbm-ui/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('/Users/elikeji/work/fbm-ui/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/components/alert",
        "component": require('/Users/elikeji/work/fbm-ui/src/Alert/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Alert/index.md",
          "updatedTime": 1635166723000,
          "componentName": "Alert",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "group": {
            "title": "Alert 提醒",
            "__fallback": true,
            "path": "/components/alert"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Alert 提醒",
              "heading": "alert-提醒"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Alert 提醒"
        },
        "title": "Alert 提醒 - fbm"
      },
      {
        "path": "/components/avatar",
        "component": require('/Users/elikeji/work/fbm-ui/src/Avatar/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Avatar/index.md",
          "updatedTime": 1635166723000,
          "componentName": "Avatar",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "group": {
            "title": "Avatar 头像",
            "__fallback": true,
            "path": "/components/avatar"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Avatar 头像",
              "heading": "avatar-头像"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Avatar 头像"
        },
        "title": "Avatar 头像 - fbm"
      },
      {
        "path": "/components/box",
        "component": require('/Users/elikeji/work/fbm-ui/src/Box/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Box/index.md",
          "updatedTime": 1635166723000,
          "componentName": "Box",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "group": {
            "title": "Box 容器",
            "__fallback": true,
            "path": "/components/box"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Box 容器",
              "heading": "box-容器"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Box 容器"
        },
        "title": "Box 容器 - fbm"
      },
      {
        "path": "/components/button",
        "component": require('/Users/elikeji/work/fbm-ui/src/Button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Button/index.md",
          "updatedTime": 1635489214000,
          "componentName": "Button",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "group": {
            "title": "Button 按钮",
            "__fallback": true,
            "path": "/components/button"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Button 按钮",
              "heading": "button-按钮"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Button 按钮"
        },
        "title": "Button 按钮 - fbm"
      },
      {
        "path": "/components/dialog",
        "component": require('/Users/elikeji/work/fbm-ui/src/Dialog/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Dialog/index.md",
          "updatedTime": 1635166723000,
          "componentName": "Dialog",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "group": {
            "title": "Dialog 对话框",
            "__fallback": true,
            "path": "/components/dialog"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Dialog 对话框",
              "heading": "dialog-对话框"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Dialog 对话框"
        },
        "title": "Dialog 对话框 - fbm"
      },
      {
        "path": "/components/form",
        "component": require('/Users/elikeji/work/fbm-ui/src/Form/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Form/index.md",
          "updatedTime": 1635256739000,
          "componentName": "Form",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "group": {
            "title": "Form 表单",
            "__fallback": true,
            "path": "/components/form"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Form 表单",
              "heading": "form-表单"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Form 表单"
        },
        "title": "Form 表单 - fbm"
      },
      {
        "path": "/components/icon",
        "component": require('/Users/elikeji/work/fbm-ui/src/Icon/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Icon/index.md",
          "updatedTime": 1635489214000,
          "componentName": "Icon",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "group": {
            "title": "Icon 图标",
            "__fallback": true,
            "path": "/components/icon"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Icon 图标",
              "heading": "icon-图标"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Icon 图标"
        },
        "title": "Icon 图标 - fbm"
      },
      {
        "path": "/components/input",
        "component": require('/Users/elikeji/work/fbm-ui/src/Input/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Input/index.md",
          "updatedTime": 1635489214000,
          "componentName": "Input",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "group": {
            "title": "Input 输入框",
            "__fallback": true,
            "path": "/components/input"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Input 输入框",
              "heading": "input-输入框"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Input 输入框"
        },
        "title": "Input 输入框 - fbm"
      },
      {
        "path": "/components/loading",
        "component": require('/Users/elikeji/work/fbm-ui/src/Loading/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Loading/index.md",
          "updatedTime": 1635496750000,
          "componentName": "Loading",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "group": {
            "title": "Loading 加载",
            "__fallback": true,
            "path": "/components/loading"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Loading 加载",
              "heading": "loading-加载"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Loading 加载"
        },
        "title": "Loading 加载 - fbm"
      },
      {
        "path": "/components/toast",
        "component": require('/Users/elikeji/work/fbm-ui/src/Toast/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Toast/index.md",
          "updatedTime": 1635166723000,
          "componentName": "Toast",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "group": {
            "title": "Toast 全局提示",
            "__fallback": true,
            "path": "/components/toast"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Toast 全局提示",
              "heading": "toast-全局提示"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            }
          ],
          "title": "Toast 全局提示"
        },
        "title": "Toast 全局提示 - fbm"
      },
      {
        "path": "/components/typography",
        "component": require('/Users/elikeji/work/fbm-ui/src/Typography/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Typography/index.md",
          "updatedTime": 1635166723000,
          "componentName": "Typography",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "group": {
            "title": "Typography 文字铸排",
            "__fallback": true,
            "path": "/components/typography"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Typography 文字铸排",
              "heading": "typography-文字铸排"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Typography 文字铸排"
        },
        "title": "Typography 文字铸排 - fbm"
      },
      {
        "path": "/components/confirm",
        "component": require('/Users/elikeji/work/fbm-ui/src/confirm/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/confirm/index.md",
          "updatedTime": 1635166723000,
          "componentName": "confirm",
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "group": {
            "title": "confirm 二次确认方法",
            "__fallback": true,
            "path": "/components/confirm"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "confirm 二次确认方法",
              "heading": "confirm-二次确认方法"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "confirm 二次确认方法"
        },
        "title": "confirm 二次确认方法 - fbm"
      },
      {
        "path": "/docs/getting-started",
        "component": require('/Users/elikeji/work/fbm-ui/docs/getting-started.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/getting-started.md",
          "updatedTime": 1635166723000,
          "title": "快速开始",
          "order": 2,
          "group": {
            "path": "/docs/",
            "title": "文档"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "兼容环境",
              "heading": "兼容环境"
            },
            {
              "depth": 3,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 4,
              "value": "使用 npm 或 yarn 安装",
              "heading": "使用-npm-或-yarn-安装"
            }
          ]
        },
        "title": "快速开始 - fbm"
      },
      {
        "path": "/",
        "component": require('/Users/elikeji/work/fbm-ui/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1635166723000,
          "hero": {
            "title": "fbm-ui",
            "actions": [
              {
                "text": "快速上手",
                "link": "/components"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "开箱即用",
              "desc": "<div class=\"markdown\"><p>内置material-ui，可直接通过acocado-ui引用material-ui组件</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "二次封装",
              "desc": "<div class=\"markdown\"><p>针对常见业务场景进行二次封装，帮助快速开发，让其更关注到业务层面上</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/b8570f4d-c1b1-45eb-a1da-abff53159967/kj9t990h_w144_h144.png",
              "title": "主题定制",
              "desc": "<div class=\"markdown\"><p>统一产品交互和视觉风格设计</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2021<br />Powered by</p></div>",
          "slugs": [],
          "title": "Index"
        },
        "title": "Index - fbm"
      },
      {
        "path": "/components",
        "meta": {},
        "exact": true,
        "redirect": "/components/alert"
      },
      {
        "path": "/docs/",
        "meta": {},
        "exact": true,
        "redirect": "/docs/getting-started"
      },
      {
        "path": "/docs",
        "meta": {},
        "exact": true,
        "redirect": "/docs/getting-started"
      }
    ],
    "title": "fbm",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
