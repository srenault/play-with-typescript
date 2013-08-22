export module collections.immutable {
    export interface IList<T> {
        head(): T

        tail(): IList<T>

        isEmpty(): boolean

        length(): number
    }

    export function List<T>(...as: T[]): IList<T> {
        if(as.length == 0) {
            return new Nil<T>();
        } else {
            var tail = as.splice(1, as.length)
            return new Cons<T>(as[0], List.apply(null, tail));
        }
    }

    export class Nil<T> implements IList<T> {
        constructor() {
        }

        head(): T {
            throw new Error("head of empty list");
        }

        tail(): IList<T> {
            throw new Error("tail of empty list");
        }

        isEmpty(): boolean {
            return true;
        }

        length(): number {
            return 0;
        }
    }

    class Cons<T> implements IList<T> {
        constructor (private hd: T, private tl: IList<T>) {
        }

        head(): T {
            return this.hd;
        }

        tail(): IList<T> {
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