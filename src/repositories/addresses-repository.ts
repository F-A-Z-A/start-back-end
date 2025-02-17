const addresses = [
  { id: 1, value: "street-01" },
  { id: 2, value: "street-02" },
];

export const addressesRepository = {
  findAddresses(value: string | null | undefined) {
    if (value) {
      return addresses.filter((a) => a.value.indexOf(value) > -1);
    } else {
      return addresses;
    }
  },
  findAddressById(id: number) {
    return addresses.find((a) => a.id === id);
  },
};
