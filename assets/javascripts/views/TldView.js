define(["require", "exports"], function(require, exports) {
    function render(blackList) {
        var $body = $('body');
        Object.getOwnPropertyNames(window).forEach(function (prop) {
            if (blackList.indexOf(prop) == -1) {
                $body.append('declare var ' + prop + ': any;');
                $body.append('<br/>');
            }
        });
    }
    exports.render = render;
});
