import {Router} from 'express'
import mongoose from 'mongoose'

const router = Router()

mongoose.connect('mongodb://localhost:27017/Schokoschop')

const kategorie = mongoose.model('Kategorie', {
    name: {
        type: String
    },
    description: {
        type: String
    }
})

router.get('/get', (request, response) => {
    kategorie.find().then(data => {
        response.json(data)
    })
})

router.post('/add', (request, response) => {
    kategorie.create({name: request.body.name, description: request.body.description})
    .then(() => response.json({created: true}))
    .catch(() => response.json({created: false}))
})

export default router