import { getProducts } from '@/lib/products';
import { columns } from '../components/columns';
import { DataTable } from '../components/data-table';

export default function Home() {
  const products = getProducts();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={[...products]} />
        </div>
      </main>
    </div>
  );
}
