const mongodb = require('mongodb')
const {mongoUri} = require('../config/db')

const urediFilm = (req, res, wss) => {
  const {naziv, godina, slika} = req.body
  if (!_id || !naziv || !Number(godina) || !slika) return res.send('Niste poslali sva polja.')

  mongodb.MongoClient.connect(mongoUri, (err, db) => {
    if(err) throw err
    db.collection('filmovi').update(
      {_id: mongodb.ObjectID(_id)},
      {$set: {
        godina: Number(godina),
        naziv,
        slika
      }}
    )
    res.send('Film je uspesno azuriran.')
  })
}

module.exports = urediFilm
