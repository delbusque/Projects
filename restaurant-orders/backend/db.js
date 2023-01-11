const { MongoClient } = require('mongodb');

let dbConnection;

// const connectToDb = (cb) => {
//     MongoClient.connect('mongodb://localhost:27017/user-list')
//         .then((client) => {
//             connectToDb = client.db;
//             return cb();
//         })
//         .catch(err => {
//             console.log(err);
//             return cb(err);
//         })

// }

// const getDb = () => dbConnection;

// module.exports = {
//     connectToDb,
//     getDb
// }

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://127.0.0.1/user-list')
            .then(client => {
                dbConnection = client.db()
                return cb()
            })
            .catch(err => {
                console.log(err)
                return cb(err)
            })
    },
    getDb: () => dbConnection
}