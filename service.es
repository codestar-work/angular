import { bootstrap, Component, Inject, NgFor }
from 'angular2/angular2';

class MockupService {
	read(callback) {
		fetch("/data/stocks.json")
		.then(response => return response.json())
		.then(data => callback(data));
	}
}

class DataService {
	read(callback) {
		let list =
		['aapl','goog','msft', 'ibm', 'orcl', 'hpq', 'ncr', 'dbd', 'emc',
			'xrx', 'ca', 'acn',
			'adbe','adsk','symc','vmw','rht','sap', 'intu', 'ctxs', 'ment',
			'fis',
			'fb', 'amzn', 'ebay', 'pcln', 'aol', 'yhoo', 'lnkd', 'twtr',
			'grpn', 'yndx', 'bidu', 'nflx', 'renn', 'z', 'zen', 'baba',
			'pypl', 'sq',
			'intc', 'amd', 'nvda', 'txn', 'ter', 'mu', 'amat',
			'xlnx', 'altr', 'qcom', 'mchp', 'atml', 'cy', 'mscc', 'lscc',
			'brcm', 'mrvl', 'stm',
			'sndk', 'wdc', 'stx',
			'ea', 'znga', 'king',
			'csco', 'jnpr',
			'irdm', 'nok', 't', 'vod', 'vz', 'alu',
			'xom', 'cvx', 'ba', 'gm', 'f', 'dis', 'sbux', 'brk-a',
			'ge', 'wmt', 'ko', 'pep', 'hog','cpb',
			'jnj', 'pg', 'pfe', 'gsk', 'mrk', 'lly', 'abt', 'bmy',
			'c', 'wfc', 'jpm', 'bac', 'pm', 'jcp',
			'v', 'gs', 'axp', 'ms', 'fox', 'cbs', 'viab', 'twx',
			'dal', 'ual', 'aal', 'luv',
			'fisv'
		];

		let s = this.url(list.join(','));
		fetch(s).
		then(response => response.json()).
		then(d => {
			let data = d.query.results.quote;
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
			return data;
		}).
		then(d => callback(d));
	}

	url(list) {
		let query = encodeURIComponent(`
			select * from yahoo.finance.quotes where
			symbol in ('${list}')`);
		let url = `https://query.yahooapis.com/v1/public/yql?q=${query}` +
			`&format=json&diagnostics=false` +
			`&env=http://datatables.org/alltables.env` +
			`&callback=`;
		return url;
	}
}

@Component({
	selector: 'my-component',
	providers: [MockupService, DataService],
	directives: [NgFor],
	template: `
		<ul>
			<li *ng-for="#item of data">
				{{item.Symbol}}
			</li>
		</ul>
	`;
})
class App {
	constructor(@Inject(DataService) service) {
		this.service = service;
		this.service.read(d => this.data = d);
	}
}

bootstrap(App);
