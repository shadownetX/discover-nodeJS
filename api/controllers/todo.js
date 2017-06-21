// controllers/todo.js

const todo = require('../models/todo.js');

exports.all = all;
exports.find = find;
exports.create = create;
exports.update = update;
exports.remove = remove;

function all(req, res) {
    todo.all().then(
        function (tasks) {
            res.status(200);
            res.json(tasks);
        },
        function (err) {
            res.json(err);
        }
    );

}

function find(req, res) {
    todo.find(req.params.id).then(
        function (task) {
            if (null === task) {
                res.json({ message: 'Task not found' });
            }
            res.json(task);
        },
        function (err) {
            res.status(500);
            res.json(err);
        }
    );
}

function create(req, res) {
    todo.create(req.body).then(
        function () {
            res.status(201);
            res.json({ message: 'Task created' });
        },
        function (err) {
            res.status(500);
            res.json(err);
        }
    );
}

function update(req, res) {
    todo.update(req.params.id, req.body).then(
        function () {
            res.json({ message: 'Task modified' });
        }, function (err) {
            res.status(500);
            res.json(err);
        }
    );
}

function remove(req, res) {
    todo.remove(req.params.id).then(
        function () {
            res.json({ message: "Task removed" });
        },
        function (err) {
            res.status(500);
            res.json(err);
        }
    );
}