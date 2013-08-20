// var properties = Object.keys(Window).concat(Object.keys(Window.prototype));

// properties.forEach(function(prop) {
//     var attr = Window[prop] || Window.prototype[prop];
//     if (isFunction(attr)) {
//         console.log('declare function ' + prop + '(...args):any');
//     } else {
//         console.log('declare var ' + prop);
//     }
// });


(function() {
    function isFunction (any) {
        return typeof any == 'function';
    };

    var blackList = [
        "NaN",
        "Infinity",
        "parseInt",
        "parseFloat",
        "eval",
        "parseInt",
        "parseFloat",
        "isNaN",
        "isFinite",
        "decodeURI",
        "decodeURIComponent",
        "encodeURI",
        "encodeURIComponent",
        "PropertyDescriptor",
        "PropertyDescriptorMap",
        "Object",
        "Function",
        "String",
        "Boolean",
        "Number",
        "Math",
        "Date",
        "RegExpExecArray",
        "RegExp",
        "Error",
        "EvalError",
        "RangeError",
        "ReferenceError",
        "SyntaxError",
        "TypeError",
        "URIError",
        "JSON",
        "Array",
        "ArrayBuffer",
        "Int8Array",
        "Uint8Array",
        "Int16Array",
        "Uint16Array",
        "Int32Array",
        "Uint32Array",
        "Float32Array",
        "Float64Array",
        "Map",
        "WeakMap",
        "Set",
        "String",
        "Number",
        "Date",
        "Location",
        "document",
        "name",
        "Intl",
        "undefined"
    ];

    var $body = $('body');
    Object.getOwnPropertyNames(window).forEach(function(prop) {
        if(blackList.indexOf(prop) == -1) {
            $body.append('declare var ' + prop + ': any;');
            $body.append('<br/>');
        }
    });

})();