var App = ng.core
.Component({
	selector: 'app',
	template: 'Hello {{ name }}'
})
.Class({
	constructor: function() {
		this.name = 'Angular 2';
	}
});

ng.platform.browser.bootstrap(App);
