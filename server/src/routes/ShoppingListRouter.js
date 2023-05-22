import express from "express";
const router = express.Router();

import * as shoppingListService from "../services/ShoppingListService.js";

router.get("/", async (req, res) => {
  const shoppingList = await shoppingListService.getShoppingList();
  res.status(200).send(shoppingList);
});

router.post("/", async (req, res) => {
  const shoppingList = await shoppingListService.createShoppingList(req.body);
  res.status(201).send(shoppingList);
});

router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const shoppingList = req.body;
  const updatedShoppingList = await shoppingListService.updateShoppingList(
    id,
    shoppingList
  );
  res.status(200).send(updatedShoppingList);
});

router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  await shoppingListService.deleteShoppingList(id);
  res.status(200).send("Deleted!");
});

export { router };
