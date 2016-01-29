import { Component, Inject } from "angular2/core";
import { NgFor, NgIf } from "angular2/common";
import { bootstrap } from "angular2/platform/browser";
import { StockService } from "./stock-service.js";
// import { StockService } from "./stock-service-mock.js";

@Component({
	selector: "app",
	styles: ['.input-group { margin: 10px 0 }']
	directive: [NgFor, NgIf],
	providers: [StockService],
	template: `
	<div class="input-group">
		<input type='text' class='form-control' placeholder='Search'
			autofocus='autofocus'
			#query (keyup.enter)='search(query.value)' />
			<span class="input-group-btn">
				<button class="btn btn-default" type="button">Search</button>
			</span>
	</div>

	<table class='table table-striped'>
		<tr>
			<th>Symbol</th>
			<th>Name</th>
			<th>Market Cap</th>
			<th>EBITDA</th>
			<th>P/E Ratio</th>
			<th>Stock Exchange</th>
		</tr>
		<tr *ngFor="#x of result">
			<td>{{ x.Symbol }}</td>
			<td>{{ x.Name }}</td>
			<td>{{ x.MarketCapitalization }}</td>
			<td>{{ x.EBITDA }}</td>
			<td>{{ x.PERatio }}</td>
			<td>{{ x.StockExchange }}</td>
		</tr>
	</table>
	`
})
class Demo {
	constructor(@Inject(StockService) service) {
		this.service = service;
		this.service.read(data => this.result = data);
		this.result = [];
	}

	search(info) {

	}
}
bootstrap(Demo);
