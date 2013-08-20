declare var require: any;
declare var Router: any;

import nsbar = require("models/Bar");
import nsfoo = require("models/Foo");
import models = require("models/*");
import nscollections = require("ts/collections");
import nsapp = require("app");
import Any = require("models/Any"); // Direct import !

var Bar = models.Bar;
var Foo = models.Foo;
var List = nscollections.collections.immutable.List;

require(['jquery'], ($) => {

    $(document).ready(() => {

        var bar = new Bar()
        var barList = List<nsbar.Bar>(bar, bar, bar, bar);

        var foo = new Foo();
        var fooList = List<nsfoo.Foo>(foo, foo, foo, foo);

        console.log(barList, fooList);

        var app = new nsapp.App(Router);
        var app1 = nsapp.init(Router);

        console.log(app, app1, new Any());
    });

});