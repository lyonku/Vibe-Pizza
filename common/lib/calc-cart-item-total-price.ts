import { CartItemDTO } from "@/@types/prisma";

export const calcCartItemTotalPrice = (item: Omit<CartItemDTO, "removedIngredinets">) => {
  const additivesPrice = item.additives.reduce((acc, additive) => acc + additive.price, 0);

  return (additivesPrice + item.productVariant.price) * item.quantity;
};
