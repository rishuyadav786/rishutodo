const mongo= require("mongoose");

var Schema=mongo.Schema;

var Todo=new Schema({
    slo:{type:Number},
    title:{type:String},
    desc:{type:String},
    active:{type:Boolean},

})
 
var AllTodosList=new Schema({
    slo:{type:Number},
    title:{type:String},
    desc:{type:String},
    active:{type:Boolean},

})
// var model= mongo.model("users",UsersSchema,"users");  data:Buffer, contentType:String

var Todos=mongo.model("todos",Todo,"todos")
var AllTodos=mongo.model("allTodos",AllTodosList,"allTodos");
// module.exports=Users
// module.exports=Items
module.exports = {
    Todos,
    AllTodos
   
 }