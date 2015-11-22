// import { StockService } from "./stock-service.es";
import { StockService } from "./stock-service-mock.es";

import { bootstrap, Component, Inject, NgFor } from "angular2/angular2";

@Component({
	selector: "app",
	directive: [NgFor],
	providers: [StockService],
	template: `
	<table class='table table-striped'>
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
		this.service.read(d => this.result = d);
		this.service.read(d => console.log(d));
	}
}
bootstrap(Demo);
