define(["require", "exports", "./models/*", "./ts/collections", "./app", "./models/Any"], function(require, exports, __models__, __nscollections__, __App__, __Any__) {
    
    
    var models = __models__;
    var nscollections = __nscollections__;
    var App = __App__;
    var Any = __Any__;

    var Bar = models.Bar;
    var Foo = models.Foo;
    var List = nscollections.collections.immutable.List;

    require([], function () {
        $(document).ready(function () {
            var bar = new Bar();
            var barList = List(bar, bar, bar, bar);

            var foo = new Foo();
            var fooList = List(foo, foo, foo, foo);

            var app = new App(Router);
        });
    });
});
