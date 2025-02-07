import express from "express"; // create express app
import bodyParser from "body-parser";
import { productsRouter } from "./routes/products-router";
import { addressesRouter } from "./routes/addresses-router";

// create express app
const app = express();
const port = 3000;

const parserMiddleWare = bodyParser();
app.use(parserMiddleWare);

app.use("/products", productsRouter);

app.use("/addresses", addressesRouter);

// start app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
