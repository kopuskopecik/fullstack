import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { router as shoppingListRouter } from "./routes/ShoppingListRouter.js";

const app = express();

// cors
app.use(cors());

// Configuring body parser middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

app.use("/api/v1/shoppingList", shoppingListRouter);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(3002).send("Something broke!");
});

app.listen(3002, () => {
  console.log("rest api server has been just on port 3001 started!");
});
