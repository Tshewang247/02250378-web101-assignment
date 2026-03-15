export default function VideoCard({ title }) {
  return (
    <div className="border rounded-lg p-4 mb-6 shadow-md bg-white dark:bg-gray-900">
      <div className="bg-black h-60 mb-4 rounded-md"></div>
      <h2 className="font-semibold text-lg text-black dark:text-white">{title}</h2>
      <div className="flex gap-4 mt-2 text-gray-500 dark:text-gray-400">
        <span>❤️ 120</span>
        <span>💬 40</span>
        <span>↗ Share</span>
      </div>
    </div>
  );
}
