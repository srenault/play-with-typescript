declare var require: any;

import nsbar = require("models/Bar");
import nsfoo = require("models/Foo");
import nscollections = require("ts/collections")

var Bar = nsbar.Bar;
var Foo = nsfoo.Foo;
var List = nscollections.collections.immutable.List;

require(['jquery'], ($) => {
    $(document).ready(() => {
        var bar = new Bar()
        var barList = List<nsbar.Bar>(bar, bar, bar, bar);

        var foo = new Foo();
        var fooList = List<nsfoo.Foo>(foo, foo, foo, foo);

        console.log(barList, fooList);
    });
});