# Baza filmova API

Backend API za bazu filmova Škole koda.

```
https://baza-filmova.herokuapp.com/filmovi/ 
(GET zahtev bez parametara)

https://baza-filmova.herokuapp.com/pokazi-film/5be9da410f0a326f85bd120f
(GET zahtev sa id parametarom)

https://baza-filmova.herokuapp.com/dodaj-film/  
(POST zahtev sa parametrima: naziv, godina, slika (obavezno) i comments (opciono))

https://baza-filmova.herokuapp.com/uredi-film/  
(PUT zahtev sa obaveznim parametrima: _id, naziv, godina i slika)

https://baza-filmova.herokuapp.com/obrisi-film/
(DELETE zahtev, obavezan parametar id)
```

## Prerequisites

- Intall Node.js
- Set `FILMOVI_DB_URL` environment variable (MongoDB URL)

(mozete napraviti lokalnu MongoDB sa podacima iz `data/backup.json`) 

## Start

```
npm i
npm start
```

## Deploy

Deploy will be done automatically after merge into master branch. 
