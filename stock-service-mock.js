import { Injectable } from "angular2/core";

@Injectable()
export class StockService {
	read(callback) {
		fetch("/data/stocks.json")
		.then(response => response.json())
		.then(data => {
			for (var i = 0; i < data.length; i++) {
				data[i].Symbol = data[i].Symbol.toUpperCase();
			}
			data.sort((x,y) => {
				let a = parseFloat(x.MarketCapitalization);
				let b = parseFloat(y.MarketCapitalization);
				if (x.MarketCapitalization != null &&
					x.MarketCapitalization.indexOf('B') >= 0) {
					a *= 1000;
				}
				if (y.MarketCapitalization != null &&
					y.MarketCapitalization.indexOf('B') >= 0) {
					b *= 1000;
				}
				return a > b ? -1 : 1;
			});

			callback(data);
		});
	}
}
