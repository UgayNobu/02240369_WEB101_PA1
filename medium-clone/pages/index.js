// Main page - imports and combines all components to build the Medium homepage
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import PostList from "../components/PostList"
import RightSidebar from "../components/RightSidebar"
import posts from "../data/posts"

export default function Home() {
  return (
    // Main container - white background like Medium
    <div className="min-h-screen bg-white">

      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area - three column layout */}
      <div className="max-w-6xl mx-auto flex px-4">

        {/* Left sidebar - navigation links */}
        <Sidebar />

        {/* Middle - main post feed */}
        <main className="flex-1 py-8 px-4 md:px-8">
          <PostList posts={posts} />
        </main>

        {/* Right sidebar - staff picks and topics */}
        <RightSidebar />

      </div>

    </div>
  )
}