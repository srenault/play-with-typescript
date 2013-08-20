define(["require", "exports", './views/TldView'], function(require, exports, __TldView__) {
    

    var TldView = __TldView__;

    var App = (function () {
        function App(Router) {
            this.router = null;
            this.initRouter(Router);
            this.initViews();
        }
        App.prototype.initRouter = function (Router) {
            this.router = new Router();

            this.router.route('/#', function () {
                console.log('Root !');
            });

            this.router.route('/bar', function () {
                console.log('Bar !');
            });

            this.router.start();
        };

        App.prototype.initViews = function () {
            TldView.render(["Function", "undefined"]);
        };
        return App;
    })();
    return App;
});
