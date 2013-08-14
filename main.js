var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var List = (function () {
    function List() {
        var as = [];
        for (var _i = 0; _i < (arguments.length - 0); _i++) {
            as[_i] = arguments[_i + 0];
        }
        if (as.length == 0) {
            return nil;
        } else {
            var tail = as.splice(1, as.length);
            return new Cons(as[0], List.apply(null, tail));
        }
    }
    List.prototype.head = function () {
        throw new Error("abstract method");
    };

    List.prototype.tail = function () {
        throw new Error("abstract method");
    };

    List.prototype.isEmpty = function () {
        throw new Error("abstract method");
    };

    List.prototype.length = function () {
        throw new Error("abstract method");
    };
    return List;
})();

var Nil = (function (_super) {
    __extends(Nil, _super);
    function Nil() {
        _super.call(this);
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
})(List);

var nil = new Nil();

var Cons = (function (_super) {
    __extends(Cons, _super);
    function Cons(hd, tl) {
        _super.call(this);
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
})(List);

var Todo = (function () {
    function Todo(title, priority) {
        this.title = title;
        this.priority = priority;
    }
    return Todo;
})();

var todo = new Todo("Title", 1);
var todoList = new List(todo, todo, todo, todo);

console.log(todoList.head());
console.log(todoList.tail());

var emptyList = new List();
console.log(emptyList);
