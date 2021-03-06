const mongodb = require('mongodb')
const {mongoUri} = require('../config/db')
const WebSocket = require('ws')

const dodajFilm = (req, res, wss) => {
  let {naziv, godina, slika} = req.body
  naziv = naziv.trim()
  godina = Number(godina)
  if (!naziv || !godina || !slika) return res.send('Niste poslali sva polja.')

  mongodb.MongoClient.connect(mongoUri, (err, db) => {
    if(err) throw err
    db.collection('filmovi').update(
      {naziv},
      {$set: {
        godina,
        slika
      }},
      {upsert: true}
    )
    res.send('Hvala na azuriranju baze filmova.')
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) client.send('Baze filmova je azurirana.')
    })
  })
}

module.exports = dodajFilm
