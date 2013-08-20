define(["require", "exports"], function(require, exports) {
    (function (collections) {
        (function (immutable) {
            function List() {
                var as = [];
                for (var _i = 0; _i < (arguments.length - 0); _i++) {
                    as[_i] = arguments[_i + 0];
                }
                if (as.length == 0) {
                    return new Nil();
                } else {
                    var tail = as.splice(1, as.length);
                    return new Cons(as[0], List.apply(null, tail));
                }
            }
            immutable.List = List;

            var Nil = (function () {
                function Nil() {
                }
                Nil.prototype.head = function () {
                    throw new Error("head of empty list");
                };

                Nil.prototype.tail = function () {
                    throw new Error("tail of empty list");
                };

                Nil.prototype.isEmpty = function () {
                    return true;
                };

                Nil.prototype.length = function () {
                    return 0;
                };
                return Nil;
            })();
            immutable.Nil = Nil;

            var Cons = (function () {
                function Cons(hd, tl) {
                    this.hd = hd;
                    this.tl = tl;
                }
                Cons.prototype.head = function () {
                    return this.hd;
                };

                Cons.prototype.tail = function () {
                    return this.tl;
                };

                Cons.prototype.isEmpty = function () {
                    return false;
                };

                Cons.prototype.length = function () {
                    return 1 + this.tl.length();
                };
                return Cons;
            })();
        })(collections.immutable || (collections.immutable = {}));
        var immutable = collections.immutable;
    })(exports.collections || (exports.collections = {}));
    var collections = exports.collections;
});
