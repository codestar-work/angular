import { bootstrap, Component, NgFor } from 'angular2/angular2';
@Component({
	selector: 'search',
	directives: [NgFor]
	styles: [ `input { margin-top: 10px; }` ],
	template: `
		<input type='text' class='form-control'
			placeholder='Search' autofocus='autofocus'
			#text (keyup.enter)='search(text)'
			/>
		<input type='button' value='Search'
			[class]='searchButtonClass' (click)='search(text)' />
		<ul>
			<li *ng-for='#item of result'>{{item.address}}</li>
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

	search(text) {
		this.result = [];
		for (let i = 0; i < this.stations.length; i++) {
			if (this.stations[i].postcode == text.value) {
				this.result.push(this.stations[i]);
			}
		}
	}
}

bootstrap(Search);
