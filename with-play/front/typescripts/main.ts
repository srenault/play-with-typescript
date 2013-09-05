///<reference path="./browser.d.ts"/>

import Immutable = require("ts/immutable/package");
var Option = Immutable.Option;
var List = Immutable.List;

require([], () => {
    $(document).ready(() => {
        List(1,2,3,4).map((i) => {
            return i * 2;
        }).foreach((i) => {
            console.log(i);
        });

        var age = Option(null).getOrElse(() => {
            return 18;
        });

        var maybeWeight = Option(70);
        maybeWeight.map((w) => {
            return w / 2
        });

        console.log(age);
    });
});