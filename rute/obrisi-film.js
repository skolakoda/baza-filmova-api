const mongodb = require('mongodb')
const {mongoUri} = require('../config/db')

const obrisiFilm = (req, res) => {
  mongodb.MongoClient.connect(mongoUri, (err, db) => {
    db.collection('filmovi').deleteOne({'_id': new mongodb.ObjectID(req.body.id)})
    res.send(`Unos sa ID ${req.body.id} je obrisan.`)
  })
}

module.exports = obrisiFilm
