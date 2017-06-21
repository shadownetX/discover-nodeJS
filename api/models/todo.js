// models/todo.js

const taskSchema = require('../schemas/task.js');
const Task = mongoose.model('Task', taskSchema.schema);

exports.all = all;
exports.create = create;
exports.find = find;
exports.update = update;
exports.remove = remove;
exports.findByStatus = findByStatus;

function all() {
    return Task.find({}, { "__v": 0 }).sort({ date: -1 }).exec();
}

function find(id) {
    return Task.findById(id, { "__v": 0 });
}

function create(data) {
    var task = new Task();
    task.title = data.title;
    task.description = data.description;
    task.created = new Date();
    return task.save();
}

function findByStatus(status) {
    return Task.find({status: {$eq: status}}, { "__v":0}).exec();
}

function update(id, data) {
    var promise = find(id);

    promise.then(
        function (task) {
            //success
            if (task === null) {
                return null;
            }
            task.title = data.title;
            task.description = data.description;
            task.status = data.status;

            return task.save();
        },
        function () {
            //error
        }
    );

    return promise;
}

function remove(id) {
    return Task.findByIdAndRemove(id);
}