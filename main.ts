declare var require: any;

import nsbar = require("models/Bar");
import nsfoo = require("models/Foo");
import nscollections = require("ts/collections")

require(['jquery'], ($) => {
    $(document).ready(() => {
        var bar = new nsbar.Bar()
        var barList = new nscollections.collections.immutable.List<nsbar.Bar>(bar, bar, bar, bar);

        var foo = new nsfoo.Foo();
        var fooList = new nscollections.collections.immutable.List<nsfoo.Foo>(foo, foo, foo, foo);

        console.log(barList, fooList);
    });
});