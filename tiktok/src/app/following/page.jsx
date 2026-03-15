export default function FollowingPage() {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-3 text-black dark:text-white">Follow accounts</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        Follow accounts to see their latest videos
      </p>

      <div className="grid grid-cols-5 gap-6 mb-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="text-center">
            <div className="h-16 w-16 rounded-full bg-gray-300 dark:bg-gray-700 mx-auto mb-2"></div>
            <p className="text-sm font-semibold text-black dark:text-white">user_{index + 1}</p>
            <button className="mt-2 text-xs bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-full">
              Follow
            </button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-8 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          See more
        </button>
      </div>
    </div>
  );
}
