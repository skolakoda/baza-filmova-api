const mongodb = require('mongodb')
const {mongoUri} = require('../config/db')

const pokaziFilm = (req, res) => {
  mongodb.MongoClient.connect(mongoUri, (err, db) => {
    db.collection('filmovi').findOne({'_id': mongodb.ObjectID(req.params.id)}, (err, item) => {
      if (err) console.log(err)
      res.send(item)
    })
  })
}

module.exports = pokaziFilm
