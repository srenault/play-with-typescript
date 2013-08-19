define(["require", "exports", "models/Bar", "models/Foo", "ts/collections"], function(require, exports, __nsbar__, __nsfoo__, __nscollections__) {
    var nsbar = __nsbar__;
    var nsfoo = __nsfoo__;
    var nscollections = __nscollections__;

    require(['jquery'], function ($) {
        $(document).ready(function () {
            var bar = new nsbar.Bar();
            var barList = new nscollections.collections.immutable.List(bar, bar, bar, bar);

            var foo = new nsfoo.Foo();
            var fooList = new nscollections.collections.immutable.List(foo, foo, foo, foo);

            console.log(barList, fooList);
        });
    });
});
