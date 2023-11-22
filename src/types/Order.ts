export type Order = {
  id: number;
  userId: number;
  productIds?: { id: number }[];
};
