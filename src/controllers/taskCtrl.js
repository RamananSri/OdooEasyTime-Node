const taskDB = require("../models/task");

var getTasks = function(req, res) {
	res.json(taskDB);
};

var putTask = function(req, res) {
	var putId = req.params.id;

	for (var i = 0; putId == taskDB.tasks[i].taskID; i++) {
		taskDB.tasks[i] = req.body;
	}
	res.send(taskDB.tasks);
};

var postTask = function(req, res) {
	taskDB.tasks[taskDB.tasks.length] = req.body;
	res.send(taskDB.tasks);
};

module.exports = {
	getTasks,
	putTask,
	postTask
};
