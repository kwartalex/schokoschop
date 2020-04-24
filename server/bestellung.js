import { Router } from "express";
import mongoose from "mongoose";

const router = Router();

mongoose.connect("mongodb://localhost:27017/Schokoschop");

const bestellung = mongoose.model("Bestellung", {
  items: [{
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
  }],
  customer_address: {
    type: String,
  },
  total_price: {
    type: Number,
  },
});

router.get("/", (request, response) => {
  bestellung.find().then((data) => {
    response.json(data);
  });
});

router.put("/", (request, response) => {
  bestellung
    .create({
      items: {
        name: request.body.name,
        price: request.body.price,
        quantity: request.body.quantity,
      },
      customer_address: request.body.customer_address,
      total_price: request.body.total_price,
    })
    .then(() => response.json({ created: true }))
    .catch(() => response.json({ created: false }));
});

export default router;
