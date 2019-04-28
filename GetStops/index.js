
module.exports = function (context, req) {
    context.res = {
	status: 200,
	headers: {
	    'Content-Type': 'application/json'
	},
	body: {
	    timeStamp: 'abc123',
	    stops: [
		]
	}
    };
    context.done();
};
