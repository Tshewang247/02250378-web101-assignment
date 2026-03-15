import VideoFeed from "../components/ui/VideoFeed";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">For You</h1>
      <VideoFeed />
    </div>
  );
}
