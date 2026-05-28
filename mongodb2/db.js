const mongoose = require('mongoose');
const { type } = require('os');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId; //importing object id

const User = new Schema({
    username: {type: String, unique: true},
    password: String
})


const Todo = new Schema({
    description: String,
    done: Boolean,
    userId: ObjectId
})
// Targetting collections in db to store data
// We can save data in UserModel/TodoModel collections
const UserModel = mongoose.model('users', User)
const TodoModel = mongoose.model('user-data', Todo)

module.exports =  {
    UserModel: UserModel,
    TodoModel: TodoModel
}
