import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser'

@Component({
	selector: 'my-app',
	template: '<i>Hello {{ name }}</i>'
})
class App {
	public name : string = 'Angular 2';
}

bootstrap(App);
