import { Request, Response, Router } from "express";

export const addressesRouter = Router({});

const addresses = [
  { id: 1, value: "street-01" },
  { id: 2, value: "street-02" },
];

addressesRouter.get("/", (req: Request, res: Response) => {
  if (req.query.title) {
    const searchString = req.query.title.toString();
    res.send(addresses.filter((p) => p.value.indexOf(searchString) > -1));
  } else {
    res.send(addresses);
  }
});

addressesRouter.get("/:id", (req: Request, res: Response) => {
  const address = addresses.find((a) => a.id === +req.params.id);
  address ? res.send(address) : res.send(404);
});
