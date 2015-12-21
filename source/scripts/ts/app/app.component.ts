declare var ng: any;
interface Window{
	app: any
}
(function(app){
  app.AppComponent = ng.core
    .Component({
      selector: 'my-app',
      template: '<h1>My First Angular 2 App</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
