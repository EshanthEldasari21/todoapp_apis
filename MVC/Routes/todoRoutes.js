const todoControllers = require('../Controllers/todoController');
const express = require("express");
const router = express.Router();

router.post('/addTodo', todoControllers.postTodo);
router.get('/allTodos', todoControllers.getTodos);
router.put('/editTodo/:id', todoControllers.editTodo);
router.delete('/deleteTodo/:id', todoControllers.deleteTodo);

module.exports = router;