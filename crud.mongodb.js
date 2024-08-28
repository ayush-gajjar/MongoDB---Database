
// connect to local DB
use("crudDB")
console.log(db)

//////////////////////////////////// create table in DB ////////////////////////////////////////////

// db.createCollection("courses");

////////////////////////  insert one can only add one record at time to Table ///////////////////////

// db.cources.insertOne({
//     name : "java",
//     price : 100,
//     duration : 30
// })


//////////////////////////////////// insert many record at time to Table ///////////////////////////
// db.cources.insertMany([
//     {
//         "name": "Python Basics",
//         "price": 120,
//         "duration": 40
//     },
//     {
//         "name": "Data Science with R",
//         "price": 150,
//         "duration": 35
//     },
//     {
//         "name": "Web Development with JavaScript",
//         "price": 90,
//         "duration": 25
//     },
//     {
//         "name": "Introduction to SQL",
//         "price": 80,
//         "duration": 20
//     },
//     {
//         "name": "Machine Learning Fundamentals",
//         "price": 200,
//         "duration": 50
//     },
//     {
//         "name": "Advanced CSS Techniques",
//         "price": 70,
//         "duration": 15
//     },
//     {
//         "name": "Cloud Computing with AWS",
//         "price": 180,
//         "duration": 45
//     },
//     {
//         "name": "Mobile App Development with React Native",
//         "price": 160,
//         "duration": 40
//     },
//     {
//         "name": "Cybersecurity Essentials",
//         "price": 140,
//         "duration": 30
//     },
//     {
//         "name": "DevOps for Beginners",
//         "price": 130,
//         "duration": 28
//     }
// ]
// )


///////////////////////////////// Find or Search in DB   /////////////////////////////////////////////////

// let a = db.cources.find({price : 120})
// console.log(a);


/////////////////////////////////   Update in DB   /////////////////////////////////////////////////

// db.cources.updateMany({price : 120} , {$set : ({price : 200})} )



/////////////////////////////////   Delete in DB   /////////////////////////////////////////////////

// db.cources.deleteMany({price : 130} )

