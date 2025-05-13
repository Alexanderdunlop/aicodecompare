export type Product = {
  id: string;
  provider: string;
  plan: string;
  price: string;
  completions: string;
};

const products: ReadonlyArray<Product> = [
  // Cursor plans
  { id: 'cursor-free', provider: 'Cursor', plan: 'Free', price: 'Free', completions: '2000' },
  {
    id: 'cursor-pro',
    provider: 'Cursor',
    plan: 'Pro',
    price: '$20/month',
    completions: 'Unlimited',
  },
  {
    id: 'cursor-business',
    provider: 'Cursor',
    plan: 'Business',
    price: '$40/month',
    completions: 'Unlimited',
  },
  // AugmentCode plans
  {
    id: 'augmentcode-free',
    provider: 'AugmentCode',
    plan: 'Free',
    price: 'Free',
    completions: 'Unlimited',
  },
  {
    id: 'augmentcode-developer',
    provider: 'AugmentCode',
    plan: 'Developer',
    price: '$50/month',
    completions: 'Unlimited',
  },
  {
    id: 'augmentcode-pro',
    provider: 'AugmentCode',
    plan: 'Pro',
    price: '$100/month',
    completions: 'Unlimited',
  },
  {
    id: 'augmentcode-max',
    provider: 'AugmentCode',
    plan: 'Max',
    price: '$250/month',
    completions: 'Unlimited',
  },
  // Windsurf plans
  {
    id: 'windsurf-free',
    provider: 'Windsurf',
    plan: 'Free',
    price: 'Free',
    completions: 'Unlimited',
  },
  {
    id: 'windsurf-pro',
    provider: 'Windsurf',
    plan: 'Pro',
    price: '$15/month',
    completions: 'Unlimited',
  },
  {
    id: 'windsurf-teams',
    provider: 'Windsurf',
    plan: 'Teams',
    price: '$30/month',
    completions: 'Unlimited',
  },
  {
    id: 'windsurf-enterprise',
    provider: 'Windsurf',
    plan: 'Enterprise',
    price: '$60/month',
    completions: 'Unlimited',
  },
];

export const getProducts = (): ReadonlyArray<Product> => products;
