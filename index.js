const express = require('express')
const http = require('http')
const cors = require('cors')
const bodyParser = require('body-parser')
const WebSocket = require('ws')

const filmovi = require('./rute/filmovi')
const dodajFilm = require('./rute/dodaj-film')
const obrisiFilm = require('./rute/obrisi-film')
const {port, domain} = require('./config/host')

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({server})

/* CONFIG */

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

/* RUTE */

app.get('/', (req, res) => res.send('Baza podataka u izgradnji.'))

app.get('/filmovi/', filmovi)

app.post('/dodaj-film/', (req, res) => dodajFilm(req, res, wss))

app.get('/obrisi-film/:id', obrisiFilm)

/* SERVER */

server.listen(port, () => console.log(`Server sluzi na ${domain}`))
