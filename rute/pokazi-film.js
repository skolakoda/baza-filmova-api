const mongodb = require('mongodb')
const {mongoUri} = require('../config/db')

const pokaziFilm = (req, res) => {
  mongodb.MongoClient.connect(mongoUri, (err, db) => {
    db.collection('filmovi')
      .findOne({'_id': mongodb.ObjectID(req.params.id)}, (err, film) => {
        if (err) console.log(err)
        // film.dodat = film._id.getTimestamp()
        res.send(film)
      })
  })
}

module.exports = pokaziFilm
