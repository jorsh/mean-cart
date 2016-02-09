var mongoose = require(mongoose);

TasksSchema = new mongoose.Schema({
	name: String
});

mongoose.model('Tasks', TasksSchema);
