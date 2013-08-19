define(["require", "exports", "models/Bar", "models/Foo", "ts/collections"], function(require, exports, __nsbar__, __nsfoo__, __nscollections__) {
    var nsbar = __nsbar__;
    var nsfoo = __nsfoo__;
    var nscollections = __nscollections__;

    var Bar = nsbar.Bar;
    var Foo = nsfoo.Foo;
    var List = nscollections.collections.immutable.List;

    require(['jquery'], function ($) {
        $(document).ready(function () {
            var bar = new Bar();
            var barList = List(bar, bar, bar, bar);

            var foo = new Foo();
            var fooList = List(foo, foo, foo, foo);

            console.log(barList, fooList);
        });
    });
});
