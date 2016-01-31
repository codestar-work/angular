import { Component, Inject } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { NgFor, NgIf } from 'angular2/common';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS }
from 'angular2/router';

@Component({
	template: `Home Page`
})
class HomePage{}

@Component({
	template: `Data Page`
})
class DataPage{}

@Component({
	selector: 'app',
	providers: [ROUTER_PROVIDERS],
	directives: [ROUTER_DIRECTIVES],
	template: `
		<div class='btn-group'>
			<a [routerLink]="['Home']" class='btn btn-default'>Home</a>
			<a [routerLink]="['Data']" class='btn btn-default'>Data</a>
		</div>
		<br/>
		<router-outlet></router-outlet>
	`
})
@RouteConfig([
	{ path: '', name: 'Home', component: HomePage, useAsDefault: true }
	{ path: '/data', name: 'Data', component: DataPage }
])
class App {
}

bootstrap(App);
