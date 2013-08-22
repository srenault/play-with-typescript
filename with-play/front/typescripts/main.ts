///<reference path="./browser.d.ts"/>

import nsbar = require("./models/Bar");
import nsfoo = require("./models/Foo");
import models = require("./models/*");
import nscollections = require("./ts/collections");
import App = require("./app");
import Any = require("./models/Any"); // Direct import !

var Bar = models.Bar;
var Foo = models.Foo;
var List = nscollections.collections.immutable.List;

require([], () => {
    $(document).ready(() => {
        var bar = new Bar()
        var barList = List<nsbar.Bar>(bar, bar, bar, bar);

        var foo = new Foo();
        var fooList = List<nsfoo.Foo>(foo, foo, foo, foo);

        var app = new App(Router);
    });
});