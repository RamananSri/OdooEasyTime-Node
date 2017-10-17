const moment = require("moment");

var tasks = [
	{
		taskID: 0,
		title: "opsæt mailserver",
		description: "blalalala",
		projectID: 1,
		userID: 1,
		Done: 0,
		startDate: moment().format("l"),
		endDate: moment()
			.add(3, "days")
			.format("l"),
		timeElapsed: "0"
	},
	{
		taskID: 1,
		title: "opsæt node ",
		description: "blalalala",
		projectID: 1,
		userID: 1,
		Done: 0,
		startDate: moment().format("l"),
		endDate: moment()
			.add(3, "days")
			.format("l"),
		timeElapsed: "0"
	},
	{
		taskID: 2,
		title: "opsæt mongo",
		description: "blalalal",
		projectID: 1,
		userID: 1,
		Done: 0,
		startDate: moment().format("l"),
		endDate: moment()
			.add(3, "days")
			.format("l"),
		timeElapsed: "0"
	}
];

module.exports = {
	tasks
};
