//dependences import
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//initializing express
const server = express()

server
    //using body from rec
    .use(express.urlencoded({extended: true}))

    //using static files
    .use(express.static('public'))

    //setting template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    //routes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//power on the server
server.listen(5500)