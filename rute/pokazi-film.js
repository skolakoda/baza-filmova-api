const mongodb = require('mongodb')
const {mongoUri} = require('../config/db')

const pokaziFilm = (req, res) => {
  mongodb.MongoClient.connect(mongoUri, (err, db) => {
    db.collection('filmovi').findOne({'_id': new mongodb.ObjectID(req.body.id)}, (err, item) => {
      if (err) console.log(err)
      res.send(item)
    })
  })
}

module.exports = pokaziFilm
