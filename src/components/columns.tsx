'use client';

import type { ColumnDef, Row } from '@tanstack/react-table';
import type { Product } from '@/lib/products';

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'provider',
    header: 'Provider',
  },
  {
    accessorKey: 'plan',
    header: 'Plan',
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }: { row: Row<Product> }) => {
      const price = row.getValue('price');
      return <div className="text-right font-medium">{`${price}`}</div>;
    },
  },
  {
    accessorKey: 'completions',
    header: 'Completions',
  },
];
