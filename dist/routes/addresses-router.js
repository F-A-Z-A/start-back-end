"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRouter = void 0;
const express_1 = require("express");
exports.addressesRouter = (0, express_1.Router)({});
const addresses = [
    { id: 1, value: "street-01" },
    { id: 2, value: "street-02" },
];
exports.addressesRouter.get("/", (req, res) => {
    if (req.query.title) {
        const searchString = req.query.title.toString();
        res.send(addresses.filter((p) => p.value.indexOf(searchString) > -1));
    }
    else {
        res.send(addresses);
    }
});
exports.addressesRouter.get("/:id", (req, res) => {
    const address = addresses.find((a) => a.id === +req.params.id);
    address ? res.send(address) : res.send(404);
});
