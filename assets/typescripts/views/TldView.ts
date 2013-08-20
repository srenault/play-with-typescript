///<reference path="../browser.d.ts"/>

export function render (blackList: string[]) {
    var $body = $('body');
    Object.getOwnPropertyNames(window).forEach(function(prop) {
        if(blackList.indexOf(prop) == -1) {
            $body.append('declare var ' + prop + ': any;');
            $body.append('<br/>');
        }
    });
}
