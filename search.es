import { bootstrap, Component, View, NgFor } from 'angular2/angular2';
@Component({
	selector: 'search'
})
@View({
	directives: [NgFor],
	styles: [ `input { margin-top: 10px; }` ],
	template: `
		<input type='text' class='form-control'
			placeholder='Search' autofocus='autofocus'
			#query (keyup.enter)='search(query)'
			/>
		<input type='button' value='Search'
			[class]='searchButtonClass' (click)='search(query)' />
		<ul>
			<li *ng-for='#item of result'>
				{{item.suburb}} - {{item.address}}
			</li>
		</ul>
	`
})
class Search {
	constructor() {
		this.searchButtonClass = 'btn btn-primary';
		fetch("data/stations.json").
		then(promise => return promise.json()).
		then(data => this.stations = data);
	}

	search(query) {
		let text = query.value.toUpperCase();
		this.result = [];
		for (let i = 0; i < this.stations.length; i++) {
			if (this.stations[i].suburb.indexOf(text) >= 0) {
				this.result.push(this.stations[i]);
			}
		}
	}
}

bootstrap(Search);
