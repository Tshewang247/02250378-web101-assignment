"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-black">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-900 p-6 flex flex-col border-r border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-bold mb-6 text-black dark:text-white">
          TikTok Clone
        </h1>

        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className={pathname === "/" ? "text-red-500 font-bold" : "hover:text-red-500"}
          >
            Home
          </Link>

          <Link
            href="/following"
            className={pathname === "/following" ? "text-red-500 font-bold" : "hover:text-red-500"}
          >
            Following
          </Link>

          <Link
            href="/explore"
            className={pathname === "/explore" ? "text-red-500 font-bold" : "hover:text-red-500"}
          >
            Explore
          </Link>

          <Link
            href="/live"
            className={pathname === "/live" ? "text-red-500 font-bold" : "hover:text-red-500"}
          >
            Live
          </Link>

          <Link
            href="/upload"
            className={pathname === "/upload" ? "text-red-500 font-bold" : "hover:text-red-500"}
          >
            Upload
          </Link>

          <Link
            href="/profile"
            className={pathname === "/profile" ? "text-red-500 font-bold" : "hover:text-red-500"}
          >
            Profile
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}