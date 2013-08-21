export = App

import TldView = require('./views/TldView');

class App {
    public router = null;

    constructor (Router: any) {
        this.initRouter(Router);
        this.initViews();
    }

    private initRouter (Router) {
        this.router = new Router();

        this.router.route('/#',() => {
            console.log('Root !');
        });

        this.router.route('/bar', () => {
            console.log('Bar !');
        });

        this.router.start();
    }

    private initViews () {
        TldView.render(["Function", "undefined"]);
    }
}
