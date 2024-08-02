const mongoose = require('mongoose');

// Connecting to the database
mongoose.connect('mongodb://localhost:27017/GiantPizza', { useNewUrlParser: true, useUnifiedTopology: true })
.then((err) => {
   console.log("Successfully Connected to GiantPizza Database");   
}).catch(err => {
   console.log('Could not connect to MongoDB...');
   process.exit();
});

// const { MongoClient } = require('mongodb');
// // MongoDB connection URI
// const uri = 'mongodb://localhost:27017';
// // Create a new MongoClient
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// async function run() {
//   try {
//     // Connect to the MongoDB server
//     await client.connect();
//     console.log('Connected successfully to MongoDB');
//     // Access a specific database
//     const db = client.db('testdb');
//     // Access a specific collection
//     const collection = db.collection('testcollection');
//     // Insert a document into the collection
//     await collection.insertOne({ name: 'Alice', age: 25 });
//     // Find a document in the collection
//     const document = await collection.findOne({ name: 'Alice' });
//     console.log(document);
//   } catch (error) {
//     console.error('Error connecting to MongoDB', error);
//   } finally {
//     // Close the connection
//     await client.close();
//   }
// }
// run().catch(console.dir);