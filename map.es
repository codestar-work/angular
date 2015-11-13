import { bootstrap, Component, NgFor } from 'angular2/angular2';
@Component({
	selector: 'map',
	directives: [NgFor],
	template: `
	<div id="search-panel">
		<div class="input-group">
			<input class="form-control" placeholder="Search"
				autofocus="autofocus" autocomplete="off"
				#query (keyup.enter)='search(query)' />
			<span class="input-group-btn">
				<button class="btn btn-primary"
					(click)="search(query)">Search</button>
			</span>
		</div>
	</div>

	<ul id="search-result" *ng-if="result.length > 0">
		<li *ng-for="#item of result">
			<a href="javascript:goto({{item.latitude}}, {{item.longitude}})">
				<span class='suburb'>{{item.suburb}}</span>
				<span class='address'>{{item.address}}</span>
			</a>
		</li>
	</ul>
	`
})

class Map {

	constructor() {
		fetch("/data/stations.json").
		then(promise => return promise.json()).
		then(stations => this.stations = stations);
		this.result = [];
	}

	search(query) {
		var text = query.value;
		this.result = [];
		for (let i = 0; i < this.stations.length; i++) {
			if (this.stations[i].postcode == text) {
				this.result.push(this.stations[i]);
			}
		}
	}
}













bootstrap(Map);
