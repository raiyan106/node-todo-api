// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log("connected to mongodb server");

    // db.collection('Todos').insertOne({
    //     text:'SOmething to do',
    //     completed: false
    // },(err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name:'Raiyan Khan',
    //     age: 23,
    //     location:"Dhaka"
    // },
    // (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.close();
});