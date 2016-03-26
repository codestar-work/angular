import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
	selector: 'app',
	template: `<i>Hello Angular 2</i>
		<select>
			<option *ngFor='#d of data'>{{ d }}</option>
		</select>
		`
})
class App {
	constructor() {
		this.data = ['Apple', 'Banana', 'Coconut'];
	}

}

bootstrap(App);
