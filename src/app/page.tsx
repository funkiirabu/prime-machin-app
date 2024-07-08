import CollectionsTable from '@/components/CollectionsTable';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Prime Machin Collections</h1>
        <DarkModeToggle />
      </div>
      <CollectionsTable />
    </div>
  );
}