import ReactDOM from 'react-dom';
var renderIntoBody = function (element) {
    var div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(element, div);
    div.delete = function (num) {
        if (!num || typeof num !== 'number') {
            return div.remove();
        }
        var t = setTimeout(function () {
            div.remove();
            clearTimeout(t);
        }, num);
    };
    return div;
};
export default renderIntoBody;
