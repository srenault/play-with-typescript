define(["require", "exports"], function(require, exports) {
    var App = (function () {
        function App(Router) {
            this.router = null;
            this.router = new Router();

            this.router.route('/#', function () {
                console.log('Root !');
            });

            this.router.route('/bar', function () {
                console.log('Bar !');
            });

            this.router.start();
        }
        return App;
    })();
    exports.App = App;

    function init(router) {
        return new App(router);
    }
    exports.init = init;
});
