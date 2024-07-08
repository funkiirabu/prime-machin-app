import { getCollections } from '@/lib/getCollections';

export default async function CollectionsTable() {
  const collections = await getCollections();

  return (
    <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
      <thead>
        <tr className="bg-gray-100 dark:bg-gray-800">
          <th className="border border-gray-300 dark:border-gray-700 p-2">ID</th>
          <th className="border border-gray-300 dark:border-gray-700 p-2">Name</th>
          <th className="border border-gray-300 dark:border-gray-700 p-2">Slug</th>
          <th className="border border-gray-300 dark:border-gray-700 p-2">Type</th>
        </tr>
      </thead>
      <tbody>
        {collections.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
            <td className="border border-gray-300 dark:border-gray-700 p-2">{item.id}</td>
            <td className="border border-gray-300 dark:border-gray-700 p-2">{item.name}</td>
            <td className="border border-gray-300 dark:border-gray-700 p-2">{item.slug}</td>
            <td className="border border-gray-300 dark:border-gray-700 p-2">{item.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}