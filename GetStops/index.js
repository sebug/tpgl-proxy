const http = require('http');

module.exports = function (context, req) {
    context.log('API key is ' + req.query.key);

    http.get('http://prod.ivtr-od.tpg.ch/v1/GetStops?key=' + req.query.key, (resp) => {
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
	// just give back a canned response so that we can continue
	// working
	context.res = {
	    status: 200,
	    headers: {
		'Content-Type': 'application/json'
	    },
	    body: {
		timeStamp: 'abc123',
		stops: [
		    { stopCode: "GIOL", stopName: "Gardiol" },
		    { stopCode: "ZIPLO", stopName: "ZIPLO" }
		]
	    }
	};
	context.done();
    });
};
