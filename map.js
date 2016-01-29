import { Component, View } from 'angular2/core';
import { NgFor, NgIf } from 'angular2/common';
import { bootstrap } from 'angular2/platform/browser';

@Component({
	selector: 'search'
})
@View({
	directives: [NgFor],
	template: `
	<div id="search-panel">
		<div class="input-group">
			<input class="form-control" placeholder="Search"
				autofocus="autofocus" autocomplete="off"
				#query (keyup.enter)='search(query)'
				(keyup)='keyup(query)'/>
			<span class="input-group-btn">
				<button class="btn btn-primary"
					(click)="search(query)">Search</button>
			</span>
		</div>
	</div>

	<ul id="search-result" *ngIf="result.length > 0">
		<li *ngFor="#item of result">
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
		var text = query.value.toUpperCase();
		this.result = [];
		if (text.length > 0) {
			for (let i = 0; i < this.stations.length; i++) {
				if (this.stations[i].address.indexOf(text) >= 0) {
					this.result.push(this.stations[i]);
				}
			}
		}
	}

	keyup(query) {
		if (query.value.length == 0) {
			this.result = [];
		} else {
			this.search(query);
		}
	}
}

bootstrap(Map);
