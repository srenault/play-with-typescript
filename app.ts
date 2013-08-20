export class App {
    router = null;
    constructor (Router: any) {
        this.router = new Router();

        this.router.route('/#',() => {
            console.log('Root !');
        });

        this.router.route('/bar', () => {
            console.log('Bar !');
        });

        this.router.start();
    }
}

export function init(router: any): App {
    return new App(router);
}