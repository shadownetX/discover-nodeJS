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
        function (err){
            res.json(err);
        }
    );

}

function find(req, res) {
}

function create(req, res) {
    
    todo.create(req.body).then(
        function () {
            res.status(201);
            res.json({ message: 'Task created' });
        },
        function (err) {
            res.status(500);
        }
    );
}

function update(req, res) {
}

function remove(req, res) {
}