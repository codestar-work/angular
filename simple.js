var App = ng.core
	.Component({
		selector: 'app',
		template: '<h1>Hello Angular 2!</h1>'
	})
	.Class({
		constructor: function() {}
	});

	document.addEventListener('DOMContentLoaded', function() {
		ng.platform.browser.bootstrap(App);
	});
