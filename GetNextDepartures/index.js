const http = require('http');

module.exports = function (context, req) {
    context.log('API key is ' + req.query.key);

    // Introduce some errors by flipping a coin
    let errorOut = Math.random() > 0.5;
    if (errorOut) {
	context.res = {
	    status: 500,
	    body: 'Oh noes'
	};
	context.done();
    } else {
	http.get('http://prod.ivtr-od.tpg.ch/v1/GetNextDepartures?key=' + req.query.key + '&stopCode=' + req.query.stopCode, (resp) => {
	    let data = '';

	    resp.on('data', (chunk) => {
		data += chunk;
	    });

	    resp.on('end', () => {
		context.log('All read');
		context.res = {
		    status: 200,
		    headers: {
			'Content-Type': 'application/json'
		    },
		    body: JSON.parse(data)
		};
		context.done();
	    });
	}).on("error", (err) => {
	    context.log("Error: " + err.message);
	    // give back a canned response
	    context.res = {
		status: 200,
		headers: {
		    'Content-Type': 'application/json'
		},
		body:{
		    "timestamp": "2019-04-28T15:08:17+0200",
		    "stop": {
			"stopCode": "ZIPL",
			"stopName": "ZIPLO",
			"connections": [{
			    "lineCode": "22",
			    "destinationName": "Nations",
			    "destinationCode": "NATIONS"
			}]
		    },
		    "departures": [{
			"departureCode": 49704,
			"timestamp": "2019-04-28T15:10:17+0200",
			"waitingTimeMillis": 105000,
			"waitingTime": "1",
			"line": {
			    "lineCode": "22",
			    "destinationName": "Nations",
			    "destinationCode": "NATIONS"
			},
			"reliability": "F",
			"characteristics": "PMR",
			"vehiculeType": "ABA",
			"vehiculeNo": 121
		    }, {
			"departureCode": 48920,
			"timestamp": "2019-04-28T15:41:17+0200",
			"waitingTimeMillis": 1965000,
			"waitingTime": "32",
			"line": {
			    "lineCode": "22",
			    "destinationName": "Nations",
			    "destinationCode": "NATIONS"
			},
			"reliability": "F",
			"characteristics": "PMR",
			"vehiculeType": "ABA",
			"vehiculeNo": 112
		    }]
		}
	    };
	    context.done();
	});
    }
};
