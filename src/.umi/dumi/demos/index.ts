// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'Alert-demo': {
    component: function DumiDemo() {
  var React = _interopRequireWildcard(require("react"));

  var _fbmUi = require("fbm-ui");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var _default = function _default() {
    return /*#__PURE__*/React.createElement(_fbmUi.Alayout, null, /*#__PURE__*/React.createElement(_fbmUi.Aalert, {
      type: "success"
    }, "  \u8FD9\u662F\u4E00\u4E2ASuccess\u63D0\u9192 "), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_fbmUi.Aalert, {
      type: "error"
    }, "  \u8FD9\u662F\u4E00\u4E2AError\u63D0\u9192 "), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_fbmUi.Aalert, {
      type: "warning"
    }, "  \u8FD9\u662F\u4E00\u4E2AWarning\u63D0\u9192 "), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_fbmUi.Aalert, {
      type: "info"
    }, "  \u8FD9\u662F\u4E00\u4E2AInfo\u63D0\u9192 "));
  };

  return React["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import * as React from 'react';\nimport { Aalert, Alayout} from 'fbm-ui'\n\nexport default () => (\n  <Alayout>\n    <Aalert type='success'>  这是一个Success提醒 </Aalert>\n    <br />\n    <Aalert type='error'>  这是一个Error提醒 </Aalert>\n    <br />\n    <Aalert type='warning'>  这是一个Warning提醒 </Aalert>\n    <br />\n    <Aalert type='info'>  这是一个Info提醒 </Aalert>\n</Alayout>\n)"}},"dependencies":{"react":{"version":">=16.8.0"},"fbm-ui":{"version":"1.0.2"},"react-dom":{"version":">=16.8.0"}},"componentName":"Alert","identifier":"Alert-demo"},
  },
  'Avatar-demo': {
    component: function DumiDemo() {
  var React = _interopRequireWildcard(require("react"));

  var _fbmUi = require("fbm-ui");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var imgurl = 'https://joeschmoe.io/api/v1/random';

  var _default = function _default() {
    return /*#__PURE__*/React.createElement(_fbmUi.Alayout, null, /*#__PURE__*/React.createElement(_fbmUi.Aavatar, {
      src: imgurl,
      size: "small"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_fbmUi.Aavatar, {
      src: imgurl,
      size: "middle"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_fbmUi.Aavatar, {
      src: imgurl,
      size: "large"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_fbmUi.Aavatar, {
      src: imgurl,
      size: 300
    }));
  };

  return React["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import * as React from 'react';\nimport { Aavatar, Alayout} from 'fbm-ui'\n\nconst imgurl = 'https://joeschmoe.io/api/v1/random'\nexport default () =>(\n  <Alayout>\n    <Aavatar  src={imgurl} size='small' />\n    <br/>\n    <Aavatar  src={imgurl} size='middle' />\n    <br/>\n    <Aavatar  src={imgurl} size='large' />\n     <br/>\n    <Aavatar  src={imgurl} size={300} />\n    \n  </Alayout>\n)"}},"dependencies":{"react":{"version":">=16.8.0"},"fbm-ui":{"version":"1.0.2"},"react-dom":{"version":">=16.8.0"}},"componentName":"Avatar","title":"基本","description":"<div class=\"markdown\"><p>内置三种尺寸，size支持传入数字自定义尺寸</p></div>","identifier":"Avatar-demo"},
  },
  'Avatar-demo-1': {
    component: function DumiDemo() {
  var React = _interopRequireWildcard(require("react"));

  var _fbmUi = require("fbm-ui");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var imgurl = 'https://joeschmoe.io/api/v1/random';

  var _default = function _default() {
    return /*#__PURE__*/React.createElement(_fbmUi.Alayout, null, /*#__PURE__*/React.createElement(_fbmUi.Aavatar, {
      src: imgurl,
      size: "large",
      disabled: true
    }));
  };

  return React["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import * as React from 'react';\nimport { Aavatar, Alayout} from 'fbm-ui'\n\nconst imgurl = 'https://joeschmoe.io/api/v1/random'\nexport default () =>(\n  <Alayout>\n    <Aavatar  src={imgurl} size='large' disabled/>\n    \n  </Alayout>\n)"}},"dependencies":{"react":{"version":">=16.8.0"},"fbm-ui":{"version":"1.0.2"},"react-dom":{"version":">=16.8.0"}},"componentName":"Avatar","title":"disabled","description":"<div class=\"markdown\"><p>头像禁用状态</p></div>","identifier":"Avatar-demo-1"},
  },
  'Box-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/elikeji/work/fbm-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/elikeji/work/fbm-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var React = _interopRequireWildcard(require("react"));

  var _fbmUi = require("fbm-ui");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var _default = function _default() {
    var _React$useState = React.useState(true),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        loading = _React$useState2[0],
        setLoading = _React$useState2[1];

    return /*#__PURE__*/React.createElement(_fbmUi.Alayout, null, /*#__PURE__*/React.createElement(_fbmUi.Abox, {
      mb: 3
    }, /*#__PURE__*/React.createElement(_fbmUi.Switch, {
      checked: loading,
      onChange: function onChange(e) {
        return setLoading(!loading);
      }
    })), /*#__PURE__*/React.createElement(_fbmUi.Abox, {
      loading: {
        loading: loading,
        desc: '这是loaidng 一段描述文案',
        size: 35
      }
    }, /*#__PURE__*/React.createElement(_fbmUi.Atypography, {
      variant: "body1",
      gutterBottom: true
    }, "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(_fbmUi.Divider, null), /*#__PURE__*/React.createElement(_fbmUi.Abox, {
      loading: loading
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_fbmUi.Atypography, {
      variant: "body1",
      gutterBottom: true
    }, "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.")));
  };

  return React["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import * as React from 'react';\nimport { Abox, Alayout , Atypography, Divider, Switch} from 'fbm-ui'\n\nexport default () =>{\n  const [loading, setLoading] = React.useState(true)\n  return (\n  <Alayout>\n    <Abox mb={3}>\n      <Switch\n        checked={loading}\n        onChange={(e) => setLoading(!loading)}\n      />\n    </Abox>\n    <Abox loading={{\n      loading,\n       desc: '这是loaidng 一段描述文案',\n       size: 35,\n    }}>\n      <Atypography variant=\"body1\" gutterBottom>\n        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos\n        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,\n        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum\n        quasi quidem quibusdam.\n         body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos\n        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,\n        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum\n        quasi quidem quibusdam.\n      </Atypography>\n      <br />\n    </Abox>\n    <Divider />\n    <Abox loading={loading}>\n       <br />\n      <Atypography variant=\"body1\" gutterBottom>\n        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos\n        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,\n        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum\n        quasi quidem quibusdam.\n      </Atypography>\n    </Abox>\n\n  </Alayout>\n)\n}"}},"dependencies":{"react":{"version":">=16.8.0"},"fbm-ui":{"version":"1.0.2"},"react-dom":{"version":">=16.8.0"}},"componentName":"Box","title":"loading","description":"<div class=\"markdown\"><p>给某个模块添加loaidng</p></div>","identifier":"Box-demo"},
  },
  'Box-demo-1': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/elikeji/work/fbm-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/elikeji/work/fbm-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var React = _interopRequireWildcard(require("react"));

  var _fbmUi = require("fbm-ui");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var _default = function _default() {
    var _React$useState = React.useState(true),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        disabled = _React$useState2[0],
        setDisabled = _React$useState2[1];

    return /*#__PURE__*/React.createElement(_fbmUi.Alayout, null, /*#__PURE__*/React.createElement(_fbmUi.Abox, {
      mb: 3
    }, /*#__PURE__*/React.createElement(_fbmUi.Switch, {
      checked: disabled,
      onChange: function onChange(e) {
        return setDisabled(!disabled);
      }
    })), /*#__PURE__*/React.createElement(_fbmUi.Abox, {
      disabled: disabled,
      sx: {
        display: 'inline-block'
      }
    }, /*#__PURE__*/React.createElement(_fbmUi.Atypography, {
      variant: "body1",
      gutterBottom: true
    }, "body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.")));
  };

  return React["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import * as React from 'react';\nimport { Abox, Alayout , Atypography, Switch} from 'fbm-ui'\n\nexport default () =>{\n  const [disabled, setDisabled] = React.useState(true)\n  return (\n    <Alayout>\n      <Abox mb={3}>\n        <Switch\n          checked={disabled}\n          onChange={(e) => setDisabled(!disabled)}\n        />\n      </Abox>\n      <Abox disabled={disabled} sx={{\n        display: 'inline-block',\n      }}>\n        <Atypography variant=\"body1\" gutterBottom>\n          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos\n          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,\n          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum\n          quasi quidem quibusdam.\n        </Atypography>\n      </Abox>\n    </Alayout>\n  )\n}"}},"dependencies":{"react":{"version":">=16.8.0"},"fbm-ui":{"version":"1.0.2"},"react-dom":{"version":">=16.8.0"}},"componentName":"Box","title":"disabled","description":"<div class=\"markdown\"><p>禁用某个模块</p></div>","identifier":"Box-demo-1"},
  },
  'Button-demo': {
    component: function DumiDemo() {
  var React = _interopRequireWildcard(require("react"));

  var _fbmUi = require("fbm-ui");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var _default = function _default() {
    return /*#__PURE__*/React.createElement(_fbmUi.Alayout, null, /*#__PURE__*/React.createElement(_fbmUi.Abox, null, /*#__PURE__*/React.createElement(_fbmUi.Abox, {
      sx: {
        mb: 2
      }
    }, /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      size: "small"
    }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      size: "medium"
    }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      size: "large"
    }, "\u6309\u94AE")), /*#__PURE__*/React.createElement(_fbmUi.Abox, {
      sx: {
        mb: 2
      }
    }, /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      startIcon: /*#__PURE__*/React.createElement(_fbmUi.Aicon, {
        name: "AddIcon"
      }),
      size: "small"
    }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      startIcon: /*#__PURE__*/React.createElement(_fbmUi.Aicon, {
        name: "AddIcon"
      }),
      size: "medium"
    }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      startIcon: /*#__PURE__*/React.createElement(_fbmUi.Aicon, {
        name: "AddIcon"
      }),
      size: "large"
    }, "\u6309\u94AE")), /*#__PURE__*/React.createElement(_fbmUi.Abox, {
      sx: {
        mb: 2
      }
    }, /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      variant: "outlined",
      size: "small"
    }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      variant: "outlined",
      size: "medium"
    }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      variant: "outlined",
      size: "large"
    }, "\u6309\u94AE")), /*#__PURE__*/React.createElement(_fbmUi.Abox, {
      sx: {
        mb: 2
      }
    }, /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      startIcon: /*#__PURE__*/React.createElement(_fbmUi.Aicon, {
        name: "AddIcon"
      }),
      variant: "outlined",
      size: "small"
    }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      startIcon: /*#__PURE__*/React.createElement(_fbmUi.Aicon, {
        name: "AddIcon"
      }),
      variant: "outlined",
      size: "medium"
    }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      startIcon: /*#__PURE__*/React.createElement(_fbmUi.Aicon, {
        name: "AddIcon"
      }),
      variant: "outlined",
      size: "large"
    }, "\u6309\u94AE")), /*#__PURE__*/React.createElement(_fbmUi.Abox, {
      sx: {
        mb: 2
      }
    }, /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      variant: "text",
      size: "small"
    }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      variant: "text",
      size: "medium"
    }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      variant: "text",
      size: "large"
    }, "\u6309\u94AE")), /*#__PURE__*/React.createElement(_fbmUi.Abox, {
      sx: {
        mb: 2
      }
    }, /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      startIcon: /*#__PURE__*/React.createElement(_fbmUi.Aicon, {
        name: "AddIcon"
      }),
      variant: "text",
      size: "small"
    }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      startIcon: /*#__PURE__*/React.createElement(_fbmUi.Aicon, {
        name: "AddIcon"
      }),
      variant: "text",
      size: "medium"
    }, "\u6309\u94AE"), /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      sx: {
        mr: 1
      },
      startIcon: /*#__PURE__*/React.createElement(_fbmUi.Aicon, {
        name: "AddIcon"
      }),
      variant: "text",
      size: "large"
    }, "\u6309\u94AE"))));
  };

  return React["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import * as React from 'react';\nimport {  Alayout, Abutton, Abox, ButtonGroup, Button, Aicon} from 'fbm-ui'\n\nexport default () => (\n  <Alayout>\n    <Abox>\n      <Abox sx={{mb: 2}}>\n        <Abutton sx={{mr: 1}} size=\"small\">按钮</Abutton> \n        <Abutton sx={{mr: 1}} size=\"medium\">按钮</Abutton> \n        <Abutton sx={{mr: 1}} size=\"large\">按钮</Abutton> \n      </Abox>\n       <Abox sx={{mb: 2}}>\n        <Abutton sx={{mr: 1}} startIcon={<Aicon name=\"AddIcon\"/>} size=\"small\">按钮</Abutton> \n        <Abutton sx={{mr: 1}} startIcon={<Aicon name=\"AddIcon\"/>} size=\"medium\">按钮</Abutton> \n        <Abutton sx={{mr: 1}} startIcon={<Aicon name=\"AddIcon\"/>} size=\"large\">按钮</Abutton> \n      </Abox>\n      <Abox sx={{mb: 2}}>\n        <Abutton sx={{mr: 1}}  variant=\"outlined\" size=\"small\">按钮</Abutton> \n        <Abutton sx={{mr: 1}}  variant=\"outlined\" size=\"medium\">按钮</Abutton> \n        <Abutton sx={{mr: 1}}  variant=\"outlined\" size=\"large\">按钮</Abutton> \n      </Abox>\n       <Abox sx={{mb: 2}}>\n        <Abutton sx={{mr: 1}} startIcon={<Aicon name=\"AddIcon\"/>} variant=\"outlined\" size=\"small\">按钮</Abutton> \n        <Abutton sx={{mr: 1}} startIcon={<Aicon name=\"AddIcon\"/>} variant=\"outlined\" size=\"medium\">按钮</Abutton> \n        <Abutton sx={{mr: 1}} startIcon={<Aicon name=\"AddIcon\"/>} variant=\"outlined\" size=\"large\">按钮</Abutton> \n      </Abox>\n      <Abox sx={{mb: 2}}>\n        <Abutton sx={{mr: 1}} variant=\"text\" size=\"small\">按钮</Abutton> \n        <Abutton sx={{mr: 1}} variant=\"text\" size=\"medium\">按钮</Abutton> \n        <Abutton sx={{mr: 1}} variant=\"text\" size=\"large\">按钮</Abutton> \n      </Abox>\n         <Abox sx={{mb: 2}}>\n        <Abutton sx={{mr: 1}} startIcon={<Aicon name=\"AddIcon\"/>} variant=\"text\" size=\"small\">按钮</Abutton> \n        <Abutton sx={{mr: 1}} startIcon={<Aicon name=\"AddIcon\"/>} variant=\"text\" size=\"medium\">按钮</Abutton> \n        <Abutton sx={{mr: 1}} startIcon={<Aicon name=\"AddIcon\"/>} variant=\"text\" size=\"large\">按钮</Abutton> \n      </Abox>\n     </Abox>\n  </Alayout>\n)"}},"dependencies":{"react":{"version":">=16.8.0"},"fbm-ui":{"version":"1.0.2"},"react-dom":{"version":">=16.8.0"}},"componentName":"Button","title":"基本","description":"<div class=\"markdown\"><p>精简版Formik</p></div>","identifier":"Button-demo"},
  },
  'Button-demo-1': {
    component: function DumiDemo() {
  var React = _interopRequireWildcard(require("react"));

  var _fbmUi = require("fbm-ui");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var _default = function _default() {
    return /*#__PURE__*/React.createElement(_fbmUi.Alayout, null, /*#__PURE__*/React.createElement(_fbmUi.ButtonGroup, {
      variant: "contained",
      sx: {
        mb: 2
      }
    }, /*#__PURE__*/React.createElement(_fbmUi.Abutton, null, "\u6309\u94AE"), /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      size: "small"
    }, /*#__PURE__*/React.createElement(_fbmUi.Aicon, {
      name: "OverflowIcon"
    }))));
  };

  return React["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import * as React from 'react';\nimport {  Alayout, Abutton, Abox, ButtonGroup, Aicon} from 'fbm-ui'\n\nexport default () => (\n  <Alayout>\n      <ButtonGroup variant=\"contained\" sx={{mb: 2}}>\n        <Abutton >按钮</Abutton> \n         <Abutton\n          size=\"small\"\n        >\n          <Aicon name=\"OverflowIcon\"/>\n        </Abutton>\n      </ButtonGroup>\n\n  </Alayout>\n)"}},"dependencies":{"react":{"version":">=16.8.0"},"fbm-ui":{"version":"1.0.2"},"react-dom":{"version":">=16.8.0"}},"componentName":"Button","title":"按钮组","description":"<div class=\"markdown\"><p>精简版Formik</p></div>","identifier":"Button-demo-1"},
  },
  'Button-demo-2': {
    component: function DumiDemo() {
  var React = _interopRequireWildcard(require("react"));

  var _fbmUi = require("fbm-ui");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var _default = function _default() {
    return /*#__PURE__*/React.createElement(_fbmUi.Alayout, null, /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      disabled: true
    }, "\u6309\u94AE"), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null));
  };

  return React["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import * as React from 'react';\nimport {  Alayout, Abutton } from 'fbm-ui'\n\nexport default () => (\n  <Alayout>\n    <Abutton disabled>按钮</Abutton> <br/><br/>\n    \n  </Alayout>\n)"}},"dependencies":{"react":{"version":">=16.8.0"},"fbm-ui":{"version":"1.0.2"},"react-dom":{"version":">=16.8.0"}},"componentName":"Button","title":"disabled","description":"<div class=\"markdown\"><p>精简版Formik</p></div>","identifier":"Button-demo-2"},
  },
  'Button-demo-3': {
    component: function DumiDemo() {
  var React = _interopRequireWildcard(require("react"));

  var _fbmUi = require("fbm-ui");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var _default = function _default() {
    return /*#__PURE__*/React.createElement(_fbmUi.Alayout, null, /*#__PURE__*/React.createElement(_fbmUi.Abutton, {
      loading: true
    }, "\u6309\u94AE"), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null));
  };

  return React["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import * as React from 'react';\nimport {  Alayout, Abutton } from 'fbm-ui'\n\nexport default () => (\n  <Alayout>\n    <Abutton loading>按钮</Abutton> <br/><br/>\n  </Alayout>\n)"}},"dependencies":{"react":{"version":">=16.8.0"},"fbm-ui":{"version":"1.0.2"},"react-dom":{"version":">=16.8.0"}},"componentName":"Button","title":"loading","description":"<div class=\"markdown\"><p>精简版Formik</p></div>","identifier":"Button-demo-3"},
  },
  'Dialog-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/elikeji/work/fbm-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/elikeji/work/fbm-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var React = _interopRequireWildcard(require("react"));

  var _fbmUi = require("fbm-ui");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var CustomHeader = function CustomHeader(_ref) {
    var onClose = _ref.onClose;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        flex: 1
      }
    }, "CustomHeader"), /*#__PURE__*/React.createElement(_fbmUi.Button, {
      onClick: onClose
    }, " \u5173\u95ED"));
  };

  var CustomFooter = function CustomFooter(_ref2) {
    var onOK = _ref2.onOK,
        onClose = _ref2.onClose;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        flex: 1
      }
    }, "CustomFooter"), /*#__PURE__*/React.createElement(_fbmUi.Button, {
      onClick: onClose
    }, " \u5173\u95ED"));
  };

  var _default = function _default() {
    var _React$useState = React.useState(false),
        _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
        open = _React$useState2[0],
        setOpen = _React$useState2[1];

    var _React$useState3 = React.useState(false),
        _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
        open1 = _React$useState4[0],
        setOpen1 = _React$useState4[1];

    var _React$useState5 = React.useState(false),
        _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
        open2 = _React$useState6[0],
        setOpen2 = _React$useState6[1];

    return /*#__PURE__*/React.createElement(_fbmUi.Alayout, null, /*#__PURE__*/React.createElement(_fbmUi.Button, {
      onClick: function onClick() {
        return setOpen(true);
      }
    }, " Show "), /*#__PURE__*/React.createElement(_fbmUi.Adialog, {
      open: open,
      onClose: function onClose() {
        return setOpen(false);
      },
      onOk: function onOk() {
        return setOpen(false);
      }
    }, /*#__PURE__*/React.createElement("h1", null, "content")), /*#__PURE__*/React.createElement(_fbmUi.Button, {
      onClick: function onClick() {
        return setOpen1(true);
      }
    }, " \u81EA\u5B9A\u4E49Header "), /*#__PURE__*/React.createElement(_fbmUi.Adialog, {
      open: open1,
      header: CustomHeader,
      onClose: function onClose() {
        return setOpen(false);
      },
      onOk: function onOk() {
        return setOpen(false);
      }
    }, /*#__PURE__*/React.createElement("h1", null, "content")), /*#__PURE__*/React.createElement(_fbmUi.Button, {
      onClick: function onClick() {
        return setOpen2(true);
      }
    }, " \u81EA\u5B9A\u4E49 Footer "), /*#__PURE__*/React.createElement(_fbmUi.Adialog, {
      open: open2,
      footer: CustomFooter,
      onClose: function onClose() {
        return setOpen(false);
      },
      onOk: function onOk() {
        return setOpen(false);
      }
    }, /*#__PURE__*/React.createElement("h1", null, "content")));
  };

  return React["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import * as React from 'react';\nimport { Adialog, Alayout, Button} from 'fbm-ui'\n\nconst CustomHeader =  ({ onClose }) => (\n  <div style={{\n    display:'flex',\n    alignItems: 'center',\n  }}>\n    <p style={{ flex:1}}>CustomHeader</p>\n    <Button onClick={onClose}> 关闭</Button>\n  </div>\n )\n\nconst CustomFooter = ({onOK, onClose}) =>(\n <div style={{\n    display:'flex',\n    alignItems: 'center',\n  }}>\n      <p style={{ flex:1}}>CustomFooter</p>\n    <Button onClick={onClose}> 关闭</Button>\n  </div>\n )\n\n\nexport default () =>{\n  const [open, setOpen] = React.useState(false)\n  const [open1, setOpen1] = React.useState(false)\n  const [open2, setOpen2] = React.useState(false)\n  return (\n    <Alayout>\n        <Button onClick={() => setOpen(true)}> Show </Button>\n        <Adialog \n          open={open}\n          onClose={() => setOpen(false)}\n          onOk={() => setOpen(false)}\n        >\n          <h1>content</h1 >\n        </Adialog>\n\n\n         <Button onClick={() => setOpen1(true)}> 自定义Header </Button>\n          <Adialog \n            open={open1}\n            header={CustomHeader}\n            onClose={() => setOpen(false)}\n            onOk={() => setOpen(false)}\n          >\n            <h1>content</h1 >\n          </Adialog>\n\n          <Button onClick={() => setOpen2(true)}> 自定义 Footer </Button>\n          <Adialog \n            open={open2}\n            footer={CustomFooter}\n            onClose={() => setOpen(false)}\n            onOk={() => setOpen(false)}\n          >\n            <h1>content</h1 >\n          </Adialog>\n    </Alayout>\n  )\n}"}},"dependencies":{"react":{"version":">=16.8.0"},"fbm-ui":{"version":"1.0.2"},"react-dom":{"version":">=16.8.0"}},"componentName":"Dialog","title":"基本","description":"<div class=\"markdown\"><p>基本使用</p></div>","identifier":"Dialog-demo"},
  },
  'Form-demo': {
    component: function DumiDemo() {
  var React = _interopRequireWildcard(require("react"));

  var _fbmUi = require("fbm-ui");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var formProps = {
    initialValues: {
      name: '',
      password: ''
    },
    validate: function validate(values, props) {
      var errors = {};
      var helperTexts = {
        name: '请输入名称',
        password: '请输入密码'
      };
      Object.keys(helperTexts).forEach(function (k) {
        if (values[k] === '') {
          errors[k] = helperTexts[k];
        }
      });
      return errors;
    }
  };

  var _default = function _default() {
    return /*#__PURE__*/React.createElement(_fbmUi.Alayout, null, /*#__PURE__*/React.createElement(_fbmUi.Aform, formProps, /*#__PURE__*/React.createElement(_fbmUi.Ainput, {
      label: "\u540D\u79F0",
      name: "name",
      sx: {
        mr: 2
      }
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_fbmUi.Ainput, {
      label: "\u5BC6\u7801",
      name: "password"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_fbmUi.Button, {
      sx: {
        m: '3px 0px 0 5px'
      },
      variant: "contained",
      type: "submit"
    }, "\u63D0\u4EA4")));
  };

  return React["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import * as React from 'react';\nimport {  Alayout, Ainput, Aform, Button } from 'fbm-ui'\n\nconst formProps = {\n  initialValues: {\n    name: '',\n    password: '',\n  },\n  validate: (values, props) => {\n    const errors = {};\n    const helperTexts = {\n      name: '\b\b请输入名称',\n      password: '请输入密码',\n    }\n    Object.keys(helperTexts).forEach(k => {\n      if (values[k] === '') {\n        errors[k] = helperTexts[k]\n      }\n    })\n    return errors\n  }, \n}\n\nexport default () => (\n  <Alayout>\n    <Aform {...formProps}>\n      <Ainput label=\"名称\" name=\"name\" sx={{mr: 2}} />\n      <br/>\n      <Ainput label=\"密码\" name=\"password\" />\n       <br/>\n      <Button sx={{m: '3px 0px 0 5px'}} variant=\"contained\"  type=\"submit\">\n        提交\n      </Button>\n    </Aform>\n  </Alayout>\n)\n"}},"dependencies":{"react":{"version":">=16.8.0"},"fbm-ui":{"version":"1.0.2"},"react-dom":{"version":">=16.8.0"}},"componentName":"Form","title":"基本","description":"<div class=\"markdown\"><p>精简版Formik</p></div>","identifier":"Form-demo"},
  },
  'Icon-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/elikeji/work/fbm-ui/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var React = _interopRequireWildcard(require("react"));

  var _fbmUi = require("fbm-ui");

  var icons = _interopRequireWildcard(require("@avocadoui/icons"));

  var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var itemStyle = {
    textAlign: 'center',
    padding: '10px',
    opacity: 0.8,
    '&:hover': {
      opacity: 1
    }
  };

  var handleCopy = function handleCopy(displayName) {
    var content = "<".concat(displayName, " />");
    var msg = "".concat(content, " copied");
    (0, _copyToClipboard["default"])(content);

    _fbmUi.Atoast.success(msg);
  };

  var mapIcon = Object.keys(icons).map(function (displayName, index) {
    var Icon = icons[displayName];
    return /*#__PURE__*/React.createElement(_fbmUi.Grid, {
      style: {
        cursor: "pointer"
      },
      item: true,
      key: displayName,
      xs: 2,
      onClick: function onClick() {
        return handleCopy(displayName);
      }
    }, /*#__PURE__*/React.createElement(_fbmUi.Paper, {
      sx: itemStyle
    }, /*#__PURE__*/React.createElement(Icon, {
      style: {
        fontSize: 36
      }
    }), /*#__PURE__*/React.createElement(_fbmUi.Typography, {
      style: {
        wordBreak: "break-all"
      }
    }, displayName)));
  });

  var _default = function _default() {
    return /*#__PURE__*/React.createElement(_fbmUi.Alayout, null, /*#__PURE__*/React.createElement(_fbmUi.Grid, {
      container: true,
      spacing: 6
    }, mapIcon));
  };

  return React["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"\nimport * as React from 'react';\nimport {  Alayout, Grid, Typography, Paper, Atoast } from 'fbm-ui'\nimport  * as icons from '@avocadoui/icons'\nimport toCopy from \"copy-to-clipboard\";\n\nconst itemStyle = {\n  textAlign: 'center',\n  padding: '10px',\n  opacity: 0.8,\n  \n  '&:hover': {\n    opacity: 1,\n  },\n}\n\nconst handleCopy = (displayName) => {\n  const content = `<${displayName} />`\n  const msg = `${content} copied`;\n  toCopy(content)\n  Atoast.success(msg)\n}\n\nconst mapIcon = Object.keys(icons).map((displayName, index) => {\n  const Icon = icons[displayName]\n  return (\n    <Grid\n      style={{ cursor: \"pointer\" }}\n      item\n      key={displayName}\n      xs={2}\n      onClick={() => handleCopy(displayName)}\n    >\n      <Paper sx={itemStyle}>\n        <Icon style={{ fontSize: 36 }} />\n        <Typography style={{ wordBreak: \"break-all\" }}>\n          {displayName}\n        </Typography>\n      </Paper>\n    </Grid>\n  )\n})\n\nexport default () => (\n  <Alayout>\n     <Grid container spacing={6}>\n        {mapIcon}\n      </Grid>\n  </Alayout>\n)"}},"dependencies":{"react":{"version":"^17.0.2"},"fbm-ui":{"version":"1.0.2"},"@avocadoui/icons":{"version":"1.1.22"},"copy-to-clipboard":{"version":"3.3.1"},"react-dom":{"version":"^17.0.2"},"@material-ui/core":{"version":"^4.9.10"}},"componentName":"Icon","identifier":"Icon-demo"},
  },
  'Input-demo': {
    component: function DumiDemo() {
  var React = _interopRequireWildcard(require("react"));

  var _fbmUi = require("fbm-ui");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  // eslint-disable-next-line import/no-extraneous-dependencies
  var _default = function _default() {
    return /*#__PURE__*/React.createElement(_fbmUi.Alayout, null, /*#__PURE__*/React.createElement(_fbmUi.Ainput, {
      label: "\u540D\u79F0"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_fbmUi.Ainput, {
      label: "\u540D\u79F0",
      size: "small"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_fbmUi.Ainput, {
      disabled: true,
      label: "\u540D\u79F0"
    }));
  };

  return React["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import * as React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies\nimport {  Alayout, Ainput } from 'fbm-ui'\n\nexport default () => (\n  <Alayout>\n    <Ainput label=\"名称\"  />\n    <br />\n    <br />\n    <Ainput label=\"名称\"  size=\"small\" />\n    <br />\n    <br />\n    <Ainput disabled label=\"名称\"  />\n  </Alayout>\n)\n"}},"dependencies":{"react":{"version":">=16.8.0"},"fbm-ui":{"version":"1.0.2"},"react-dom":{"version":">=16.8.0"}},"componentName":"Input","title":"两种大小","description":"<div class=\"markdown\"><p>输入框定义了三种尺寸（默认、小），高度分别为44px和34px。</p></div>","identifier":"Input-demo"},
  },
  'Loading-demo': {
    component: function DumiDemo() {
  var React = _interopRequireWildcard(require("react"));

  var _fbmUi = require("fbm-ui");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var _default = function _default() {
    return /*#__PURE__*/React.createElement(_fbmUi.Alayout, null, /*#__PURE__*/React.createElement(_fbmUi.Abox, {
      sx: {
        height: 100
      }
    }, /*#__PURE__*/React.createElement(_fbmUi.Aloading, {
      size: 40
    })), /*#__PURE__*/React.createElement(_fbmUi.Abox, null, /*#__PURE__*/React.createElement(_fbmUi.Aloading, {
      size: 20
    }), " "));
  };

  return React["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import * as React from 'react';\nimport {  Alayout, Aloading, Abox } from 'fbm-ui'\n\nexport default () => (\n  <Alayout>\n      <Abox sx={{ height: 100 }}>\n          <Aloading size={40}/> \n      </Abox>\n      <Abox><Aloading size={20}/> </Abox>\n  </Alayout>\n)\n\n"}},"dependencies":{"react":{"version":">=16.8.0"},"fbm-ui":{"version":"1.0.2"},"react-dom":{"version":">=16.8.0"}},"componentName":"Loading","title":"基本","description":"<div class=\"markdown\"><p>基本使用</p></div>","identifier":"Loading-demo"},
  },
  'Toast-demo': {
    component: function DumiDemo() {
  var React = _interopRequireWildcard(require("react"));

  var _fbmUi = require("fbm-ui");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var types = ['error', 'warning', 'success', 'info'];

  var closeCallback = function closeCallback() {
    return console.log('提示关闭回调');
  };

  var handleClick = function handleClick(type) {
    _fbmUi.Atoast[type]("\u8FD9\u662F\u4E00\u6BB5".concat(type, "\u63D0\u793A"), closeCallback);
  };

  var _default = function _default() {
    return types.map(function (type) {
      return /*#__PURE__*/React.createElement(_fbmUi.Button, {
        color: type,
        key: type,
        onClick: function onClick() {
          return _fbmUi.Atoast[type]("\u8FD9\u662F\u4E00\u6BB5".concat(type, "\u63D0\u793A"));
        }
      }, " ", type);
    });
  };

  return React["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import * as React from 'react';\nimport {  Alayout, Atoast, Button} from 'fbm-ui'\n\n\nconst types = ['error', 'warning', 'success', 'info' ]\n\nconst closeCallback = () => console.log('提示关闭回调')\nconst handleClick = (type) => {\n\n  Atoast[type](`这是一段${type}提示`, closeCallback)\n}\n\nexport default () => types.map(type => (<Button color={type} key={type} onClick={() => Atoast[type](`这是一段${type}提示`)}> {type}</Button>))\n\n"}},"dependencies":{"react":{"version":">=16.8.0"},"fbm-ui":{"version":"1.0.2"},"react-dom":{"version":">=16.8.0"}},"componentName":"Toast","title":"基本","description":"<div class=\"markdown\"><p>基本使用</p></div>","identifier":"Toast-demo"},
  },
  'Typography-demo': {
    component: function DumiDemo() {
  var React = _interopRequireWildcard(require("react"));

  var _fbmUi = require("fbm-ui");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var colors = ['error', 'warning', 'success', 'info', 'secondary', 'primary', 'disabled'];
  var tags = ['h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'];
  var typographys = [];
  tags.forEach(function (tag) {
    colors.forEach(function (color) {
      typographys.push( /*#__PURE__*/React.createElement("div", {
        key: "".concat(tag).concat(color),
        style: {
          marginBottom: 10
        }
      }, /*#__PURE__*/React.createElement(_fbmUi.Atypography, {
        variant: tag,
        color: color
      }, "tag: ", tag, " \xA0 color: ", color, "  \xA0 hello Typography")));
    });
  });

  var _default = function _default() {
    return /*#__PURE__*/React.createElement(_fbmUi.Alayout, null, typographys);
  };

  return React["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import * as React from 'react';\nimport { Alayout, Atypography } from 'fbm-ui'\n\nconst colors = [\n  'error',\n  'warning',\n  'success',\n  'info',\n  'secondary',\n  'primary',\n  'disabled',\n]\nconst tags = [\n  'h4',\n  'h5',\n  'h6',\n  'subtitle1',\n  'subtitle2',\n  'body1',\n  'body2',\n  'caption',\n  'button',\n  'overline',\n]\nconst typographys: JSX.Element[] = []\n\ntags.forEach(tag => {\n  colors.forEach(color => {\n    typographys.push(\n      <div key={`${tag}${color}`} style={{ marginBottom: 10 }}>\n        <Atypography variant={tag} color={color}>\n          tag: {tag} &nbsp;\n          color: {color}  &nbsp;\n          hello Typography\n        </Atypography>\n      </div>,\n    )\n  })\n})\n\nexport default () => (\n  <Alayout>\n     {typographys}\n  </Alayout>\n)\n"}},"dependencies":{"react":{"version":">=16.8.0"},"fbm-ui":{"version":"1.0.2"},"react-dom":{"version":">=16.8.0"}},"componentName":"Typography","title":"基本","description":"<div class=\"markdown\"><p>基本使用</p></div>","identifier":"Typography-demo"},
  },
  'confirm-demo': {
    component: function DumiDemo() {
  var React = _interopRequireWildcard(require("react"));

  var _fbmUi = require("fbm-ui");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var CustomHeader = function CustomHeader(_ref) {
    var onClose = _ref.onClose;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        flex: 1
      }
    }, "CustomHeader"), /*#__PURE__*/React.createElement(_fbmUi.Button, {
      onClick: onClose
    }, " \u5173\u95ED"));
  };

  var CustomFooter = function CustomFooter(_ref2) {
    var onOK = _ref2.onOK,
        onClose = _ref2.onClose;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        flex: 1
      }
    }, "CustomFooter"), /*#__PURE__*/React.createElement(_fbmUi.Button, {
      onClick: onClose
    }, " \u5173\u95ED"));
  };

  var _default = function _default() {
    return /*#__PURE__*/React.createElement(_fbmUi.Alayout, null, /*#__PURE__*/React.createElement(_fbmUi.Button, {
      onClick: function onClick() {
        (0, _fbmUi.Aconfirm)({
          title: '确认？',
          content: '确认添加李小刚到此步骤'
        });
      }
    }, "\u9ED8\u8BA4"), /*#__PURE__*/React.createElement(_fbmUi.Button, {
      onClick: function onClick() {
        (0, _fbmUi.Aconfirm)({
          title: '确认？',
          content: '确认将李小刚从该职位移动到所选职位吗？该操作无法被撤销。',
          okText: '撤销',
          okProps: {
            color: 'error',
            variant: 'contained'
          }
        });
      },
      color: "error"
    }, " \u544A\u8B66 "), /*#__PURE__*/React.createElement(_fbmUi.Button, {
      onClick: function onClick() {
        (0, _fbmUi.Aconfirm)({
          header: null,
          content: '确认添加李小刚到此步骤？',
          okText: '添加'
        });
      }
    }, "  \u9690\u85CF header "), /*#__PURE__*/React.createElement(_fbmUi.Button, {
      onClick: function onClick() {
        (0, _fbmUi.Aconfirm)({
          header: CustomHeader,
          content: '确认添加李小刚到此步骤？',
          okText: '添加'
        });
      }
    }, "  \u81EA\u5B9A\u4E49 header "), /*#__PURE__*/React.createElement(_fbmUi.Button, {
      onClick: function onClick() {
        (0, _fbmUi.Aconfirm)({
          footer: null,
          content: '确认添加李小刚到此步骤？',
          okText: '添加'
        });
      }
    }, "  \u9690\u85CF footer "), /*#__PURE__*/React.createElement(_fbmUi.Button, {
      onClick: function onClick() {
        (0, _fbmUi.Aconfirm)({
          footer: CustomFooter,
          content: '确认添加李小刚到此步骤？',
          okText: '添加'
        });
      }
    }, "  \u81EA\u5B9A\u4E49 footer "), /*#__PURE__*/React.createElement(_fbmUi.Button, {
      onClick: function onClick() {
        (0, _fbmUi.Aconfirm)({
          width: 600,
          title: '设置大小',
          content: '确认添加李小刚到此步骤？',
          okText: '添加'
        });
      }
    }, " \u8BBE\u7F6E\u5F39\u6846width "));
  };

  return React["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import * as React from 'react';\nimport { Aconfirm, Alayout, Button} from 'fbm-ui'\n\n\nconst CustomHeader =  ({ onClose }) => (\n  <div style={{\n    display:'flex',\n    alignItems: 'center',\n  }}>\n    <p style={{ flex:1}}>CustomHeader</p>\n    <Button onClick={onClose}> 关闭</Button>\n  </div>\n )\n\nconst CustomFooter = ({onOK, onClose}) =>(\n <div style={{\n    display:'flex',\n    alignItems: 'center',\n  }}>\n      <p style={{ flex:1}}>CustomFooter</p>\n    <Button onClick={onClose}> 关闭</Button>\n  </div>\n )\n\nexport default () =>(\n  <Alayout>\n    <Button onClick={() => {\n      Aconfirm({\n        title: '确认？',\n        content: '确认添加李小刚到此步骤',\n      })\n    }} >默认</Button>\n\n\n    <Button onClick={() => {\n      Aconfirm({\n        title: '确认？',\n        content: '确认将李小刚从该职位移动到所选职位吗？该操作无法被撤销。',\n        okText: '撤销',\n        okProps: {\n          color: 'error',\n          variant: 'contained',\n        },\n      })\n    }}  color=\"error\"> 告警 </Button>\n\n\n    <Button onClick={() => {\n      Aconfirm({\n        header: null,\n        content: '确认添加李小刚到此步骤？',\n        okText: '添加',\n      })\n    }}  >  隐藏 header </Button>\n\n    <Button onClick={() => {\n      Aconfirm({\n        header:CustomHeader,\n        content: '确认添加李小刚到此步骤？',\n        okText: '添加',\n      })\n    }}  >  自定义 header </Button>\n\n\n    <Button onClick={() => {\n      Aconfirm({\n        footer: null,\n        content: '确认添加李小刚到此步骤？',\n        okText: '添加',\n      })\n    }}  >  隐藏 footer </Button>\n\n\n    <Button onClick={() => {\n      Aconfirm({\n        footer: CustomFooter,\n        content: '确认添加李小刚到此步骤？',\n        okText: '添加',\n      })\n    }}  >  自定义 footer </Button>\n\n\n     <Button onClick={() => {\n      Aconfirm({\n        width: 600,\n        title: '设置大小',\n        content: '确认添加李小刚到此步骤？',\n        okText: '添加',\n      })\n    }}  > 设置弹框width </Button>\n  </Alayout>\n)"}},"dependencies":{"react":{"version":">=16.8.0"},"fbm-ui":{"version":"1.0.2"},"react-dom":{"version":">=16.8.0"}},"componentName":"confirm","title":"基本","description":"<div class=\"markdown\"><p>给某个模块添加loaidng</p></div>","identifier":"confirm-demo"},
  },
};
