const mongodb = require('mongodb')
const {mongoUri} = require('../config/db')

const filmovi = (req, res) => {
  mongodb.MongoClient.connect(mongoUri, (err, db) => {
    if (err) throw err

    db.collection('filmovi')
      .find()
      .map(film => ({ ...film, dodat: film._id.getTimestamp() }))
      .toArray((err, podaci) => res.send(podaci))
  })
}

module.exports = filmovi
