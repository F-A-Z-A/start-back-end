import express, { Request, Response } from "express"; // create express app
import bodyParser from "body-parser";

// create express app
const app = express();
const port = 3000;

const products = [
  { id: 1, title: "tomato" },
  { id: 2, title: "orange" },
];
const addresses = [
  { id: 1, value: "street-01" },
  { id: 2, value: "street-02" },
];

const parserMiddleWare = bodyParser();
app.use(parserMiddleWare);

app.get("/", (req: Request, res: Response) => {
  const helloMessage = "Hello World!";
  res.send(helloMessage);
});

app.get("/products", (req: Request, res: Response) => {
  if (req.query.title) {
    const searchString = req.query.title.toString();
    res.send(products.filter((p) => p.title.indexOf(searchString) > -1));
  } else {
    res.send(products);
  }
});

app.post("/products", (req: Request, res: Response) => {
  const newProduct = { id: +new Date(), title: req.body.title };
  products.push(newProduct);
  res.status(201).send(newProduct);
});

app.get("/products/:id", (req: Request, res: Response) => {
  const product = products.find((p) => p.id === +req.params.id);
  product ? res.send(product) : res.send(404);
});

app.get("/products/:id", (req: Request, res: Response) => {
  const product = products.find((p) => p.id === +req.params.id);
  if (product) {
    product.title = req.body.title;
    res.send(product);
  } else {
    res.send(404);
  }
});

app.delete("/products/:id", (req: Request, res: Response) => {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === +req.params.id) {
      products.splice(i, 1);
      res.send(204);
      return;
    }
  }
  res.send(404);
});

app.get("/addresses/:id", (req: Request, res: Response) => {
  const address = addresses.find((a) => a.id === +req.params.id);
  address ? res.send(address) : res.send(404);
});

// start app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
