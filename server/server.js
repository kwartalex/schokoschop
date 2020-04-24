import express from 'express'
import bodyParser from 'body-parser'
import kategorie from './kategorie'
import produkte from './produkte'
import warenkorb from './warenkorb'
import bestellung from './bestellung'

const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json({extended: true}))

server.use('/Kategorie', kategorie)
server.use('/Produkte', produkte)
server.use('/Warenkorb', warenkorb)
server.use('/Bestellung', bestellung)


server.listen(8040, () => console.log('server started'))