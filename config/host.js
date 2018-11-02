const port = process.env.PORT || 5000

const domain = process.env.NODE_ENV !== 'development'
  ? 'https://baza-podataka.herokuapp.com'
  : `http://localhost:${port}`

module.exports = {
  port,
  domain,
}