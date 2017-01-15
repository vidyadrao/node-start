function ToDoList(){
    this.toDoList = [];
}
ToDoList.prototype.getToDo = function(todoID){
   if(todoID != undefined){
        return this.toDoList[todoID];
   }else{

       return this.toDoList;
   }

}

ToDoList.prototype.addTodo = function(msg){
    var _obj= {};
    _obj.done= false;
    _obj.createdTime= new Date();
    _obj.updatedTime= new Date();
    _obj.msg= msg;
    this.toDoList.push(_obj);
    return this.toDoList.length;

}
ToDoList.prototype.markDone = function(todoID){
    var todoObj= this.toDoList[todoID];
    todoObj.done= true;
    todoObj.updatedTime= new Date();
    this.toDoList[todoID]= todoObj;
}
module.exports=ToDoList;