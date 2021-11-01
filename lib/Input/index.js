var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { TextField } from '@material-ui/core';
import styled from '@material-ui/core/styles/styled';
import { useFormikContext } from 'formik';
export var componentName = 'Ainput';
var InputRoot = styled(TextField, {
    name: 'Ainput',
    slot: 'Root',
})(function (_a) {
    var size = _a.size, isFormik = _a.isFormik;
    var sizes = {
        small: 32,
        large: 46,
    };
    var helperTextHeight = 18;
    return __assign(__assign({}, (isFormik && {
        height: sizes[size] + helperTextHeight,
    })), { marginBottom: 8 });
});
var useInputProps = function (inProps) {
    var formik = useFormikContext();
    if (!formik || (inProps && !inProps.name))
        return inProps;
    var getFieldProps = formik.getFieldProps, getFieldMeta = formik.getFieldMeta;
    var fieldProps = getFieldProps(inProps);
    var fieldMeta = getFieldMeta(inProps.name);
    // const fieldHelpers = getFieldHelpers(props.name)
    var props = __assign(__assign(__assign({}, inProps), fieldProps), { isFormik: true });
    if (fieldMeta.error) {
        props.helperText = fieldMeta.error;
        props.error = true;
    }
    return props;
};
var Ainput = function (inProps) {
    var props = useInputProps(inProps);
    return React.createElement(InputRoot, __assign({}, props));
};
Ainput.defaultProps = {
    size: 'large',
};
export default Ainput;
