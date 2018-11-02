# Baza filmova API

Backend API za bazu filmova Škole koda.

```
https://baza-filmova.herokuapp.com/filmovi/ 
(GET zahtev bez parametara)

https://baza-filmova.herokuapp.com/dodaj-film/  
(POST zahtev sa parametrima: naziv, godina, slika (obavezno) i comments (opciono))

https://baza-filmova.herokuapp.com/obrisi-film/
(DELETE zahtev, obavezan parametar id)
```

## Prerequisites

- Intall Node.js
- Set `FILMOVI_DB_URL` environment variables (MongoDB URL)

## Start

```
npm i
npm start
```

## Deploy

Deploy will be done automatically after merge into master branch. 