require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.APP_PORT ?? 5000

const welcome = (req, res) => {
  res.send('Welcome to my favourite movie list')
}

app.get('/', welcome)

const movieHandlers = require('./movieHandlers')
const usersHandle = require('./usersHandle')
app.get('/api/movies', movieHandlers.getMovies)
app.get('/api/movies/:id', movieHandlers.getMovieById)
app.get('/api/users', usersHandle.getUsers)
app.get('/api/users/:id', usersHandle.getUsersById)

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened')
  } else {
    console.log(`Server is listening on ${port}`)
  }
})
