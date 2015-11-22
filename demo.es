// import { StockService } from "./stock-service.es";
import { StockService } from "./stock-service-mock.es";

import { bootstrap, Component, Inject, NgFor } from "angular2/angular2";

@Component({
	selector: "app",
	styles: ['.input-group { margin: 10px 0 }']
	directive: [NgFor],
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

	<table class='table table-striped' *ng-if="result?.length > 0">
		<tr>
			<th>Symbol</th>
			<th>Name</th>
			<th>Market Cap</th>
			<th>EBITDA</th>
			<th>P/E Ratio</th>
			<th>Stock Exchange</th>
		</tr>
		<tr *ng-for="#x of result">
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
	}
}
bootstrap(Demo);
