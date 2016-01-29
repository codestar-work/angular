var App = ng.core
.Component({
	selector: 'app',
	template: '<i>Hello {{ name }}</i>'
})
.Class({
	constructor: function() {
		this.name = 'Angular 2';
	}
});

ng.platform.browser.bootstrap(App);
