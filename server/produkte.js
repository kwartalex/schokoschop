import { Router } from "express";
import mongoose from "mongoose";
import cors from 'cors';

const router = Router();
router.use(cors())

mongoose.connect("mongodb://localhost:27017/Schokoschop");

const produkte = mongoose.model("produkte", {
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  category_id: {
    type: String,
  },
});

router.get("/get", (request, response) => {
  produkte.find().then((data) => {
    response.json(data);
  }).catch((error) => response.json(error));
});

router.post("/add", (request, response) => {
  produkte
    .create({
      name: request.body.name,
      description: request.body.description,
      price: request.body.price,
      category_id: request.body.category_id,
    })
    .then(() => response.json({ created: true }))
    .catch(() => response.json({ created: false }));
});

export default router;
