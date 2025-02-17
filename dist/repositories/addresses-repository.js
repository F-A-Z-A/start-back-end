"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRepository = void 0;
const addresses = [
    { id: 1, value: "street-01" },
    { id: 2, value: "street-02" },
];
exports.addressesRepository = {
    findAddresses(value) {
        if (value) {
            return addresses.filter((a) => a.value.indexOf(value) > -1);
        }
        else {
            return addresses;
        }
    },
    findAddressById(id) {
        return addresses.find((a) => a.id === id);
    },
};
