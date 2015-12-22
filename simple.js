var App = ng.core
.Component({
	selector: 'app',
	template: '<h1>Hello {{ name }}</h1>'
})
.Class({
	constructor: function() {
		this.name = 'Angular 2'
	}
});

document.addEventListener('DOMContentLoaded', function() {
	ng.platform.browser.bootstrap(App);
});
