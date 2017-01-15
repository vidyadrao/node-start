"use strict";

console.log(require.resolve());
class ToDoListES6{

    constructor() {
        this.toDoList = [];
    }

    getToDo(todoID){
        if(todoID != undefined){
            return this.toDoList[todoID];
        }else{
            return this.toDoList;
        }

    }
    addTodo(msg){
        var _obj= {};
        _obj.done= false;
        _obj.createdTime= new Date();
        _obj.updatedTime= new Date();
        _obj.msg= msg;
        this.toDoList.push(_obj);
        return this.toDoList.length;

    }
    markDone(todoID){
        var todoObj= this.toDoList[todoID];
        todoObj.done= true;
        todoObj.updatedTime= new Date();
        this.toDoList[todoID]= todoObj;
    }

}

module.exports=ToDoListES6;