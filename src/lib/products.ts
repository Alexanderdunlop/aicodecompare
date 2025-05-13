export type Product = {
  id: string;
  provider: string;
  plan: string;
  price: string;
  completions: string;
};

const products: ReadonlyArray<Product> = [
  // Cursor plans
  { id: '1-free', provider: 'Cursor', plan: 'Free', price: 'Free', completions: '2000' },
  { id: '1-pro', provider: 'Cursor', plan: 'Pro', price: '$20/month', completions: 'Unlimited' },
  {
    id: '1-business',
    provider: 'Cursor',
    plan: 'Business',
    price: '$40/month',
    completions: 'Unlimited',
  },
  //   // AugmentCode plans
  //   { id: '2-free', name: 'AugmentCode', plan: 'Free', price: 0, costPerApi: 0.03 },
  //   { id: '2-pro', name: 'AugmentCode', plan: 'Pro', price: 99, costPerApi: 0.02 },
  //   { id: '2-business', name: 'AugmentCode', plan: 'Business', price: 299, costPerApi: 0.015 },
  //   // SuperAPI plans
  //   { id: '3-free', name: 'SuperAPI', plan: 'Free', price: 0, costPerApi: 0.07 },
  //   { id: '3-pro', name: 'SuperAPI', plan: 'Pro', price: 199, costPerApi: 0.05 },
  //   { id: '3-business', name: 'SuperAPI', plan: 'Business', price: 499, costPerApi: 0.03 },
];

export const getProducts = (): ReadonlyArray<Product> => products;
