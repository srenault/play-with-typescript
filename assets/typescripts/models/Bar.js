define(["require", "exports", "models/Foo"], function(require, exports, __foo__) {
    var foo = __foo__;

    exports.Foo = foo.Foo;

    var Bar = (function () {
        function Bar() {
        }
        return Bar;
    })();
    exports.Bar = Bar;

    console.log(foo);
});
