import {Router} from 'express'
import mongoose from 'mongoose'

const router = Router()

mongoose.connect('mongodb://localhost:27017/Schokoschop')

const warenkorb = mongoose.model('Warenkorb', {
    name: {
        type: String
    },
    quantity: {
        type: Number
    }
})

router.get('/get', (request, response) => {
    warenkorb.find().then(data => {
        response.json(data)
    })
})

router.put('/add', (request, response) => {
    warenkorb.create({name: request.body.name, quantity: request.body.quantity})
    .then(() => response.json({created: true}))
    .catch(() => response.json({created: false}))
})

router.delete('/:objectId', (request, response) => {
    console.log(request.params.objectId)

    warenkorb.findByIdAndDelete(request.params.objectId)
    .then((res) => {
        console.log(JSON.stringify(res))
        response.json({deleted: true})
    })
    .catch((error) => response.json(error))
})


export default router