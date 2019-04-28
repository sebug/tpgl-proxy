module.exports = function (context, req) {
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
};
