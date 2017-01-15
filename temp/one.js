var TodoList = require('./ToDoListES6');

var myTodoList = new TodoList();

myTodoList.addTodo("one");
myTodoList.addTodo("two");


setTimeout(function() {
    "use strict";
    myTodoList.markDone(1);
    console.log(myTodoList.getToDo(1));

}, 1000);



