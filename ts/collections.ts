export module collections {
    export module immutable {

        export interface Nothing {}

        export class List<T> {
            constructor (...as: T[]) {
                if(as.length == 0) {
                    return nil;
                } else {
                    var tail = as.splice(1, as.length)
                    return new Cons<T>(as[0], List.apply(null, tail));
                }
            }

            head(): T {
                throw new Error("abstract method");
            }

            tail(): List<T> {
                throw new Error("abstract method");
            }

            isEmpty(): boolean {
                throw new Error("abstract method");
            }

            length(): number {
                throw new Error("abstract method");
            }
        }

        export class Nil extends List<Nothing> {
            constructor() {
                super();
            }

            head(): Nothing {
                throw new Error("head of empty list");
            }

            tail(): List<Nothing> {
                throw new Error("tail of empty list");
            }

            isEmpty(): boolean {
                return true;
            }

            length(): number {
                return 0;
            }
        }

        export var nil = new Nil();

        class Cons<T> extends List<T> {
            constructor (private hd: T, private tl: List<T>) {
                super();
            }

            head(): T {
                return this.hd;
            }

            tail(): List<T> {
                return this.tl;
            }

            isEmpty(): boolean {
                return false;
            }

            length(): number {
                return 1 + this.tl.length();
            }
        }
    }
}