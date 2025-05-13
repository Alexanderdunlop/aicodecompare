import { columns } from '../components/columns';
import { DataTable } from '../components/data-table';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="container mx-auto py-10">
          <DataTable
            columns={columns}
            data={[
              { id: '1', name: 'Cursor', price: 49, costPerApi: 0.01 },
              { id: '2', name: 'AugmentCode', price: 99, costPerApi: 0.02 },
              { id: '3', name: 'SuperAPI', price: 199, costPerApi: 0.05 },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
