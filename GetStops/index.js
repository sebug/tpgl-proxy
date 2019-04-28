
module.exports = function (context, req) {
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
};
