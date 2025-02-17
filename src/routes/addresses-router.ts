import { Request, Response, Router } from "express";
import { addressesRepository } from "../repositories/addresses-repository";

export const addressesRouter = Router({});

addressesRouter.get("/", (req: Request, res: Response) => {
  const foundAddresses = addressesRepository.findAddresses(req.query.value?.toString());
  res.send(foundAddresses);
});

addressesRouter.get("/:id", (req: Request, res: Response) => {
  const address = addressesRepository.findAddressById(+req.params.id);
  address ? res.send(address) : res.send(404);
});
