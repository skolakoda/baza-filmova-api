const mongodb = require('mongodb')
const {mongoUri} = require('../config/db')

const urediFilm = (req, res) => {
  let {naziv, godina, slika} = req.body
  naziv = naziv.trim()
  godina = Number(godina)
  if (!naziv || !godina || !slika) return res.send('Niste poslali sva polja.')

  mongodb.MongoClient.connect(mongoUri, (err, db) => {
    if(err) throw err
    db.collection('filmovi').update(
      {_id: mongodb.ObjectID(_id)},
      {$set: {
        godina,
        naziv,
        slika
      }}
    )
    res.send('Film je uspesno azuriran.')
  })
}

module.exports = urediFilm
