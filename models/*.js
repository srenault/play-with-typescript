define(["require", "exports", "models/Foo", "models/Bar"], function(require, exports, __foo__, __bar__) {
    var foo = __foo__;
    var bar = __bar__;

    exports.Foo = foo.Foo;
    exports.Bar = bar.Bar;
});
