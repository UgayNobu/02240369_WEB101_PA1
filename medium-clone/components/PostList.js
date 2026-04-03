// PostList component - renders a list of PostCard components
// Imports PostCard to reuse it for each post
import PostCard from "./PostCard"

// PostList receives the posts array as a prop from the parent (index.js)
export default function PostList({ posts }) {
  return (
    // Container for all post cards
    <div className="flex flex-col">

      {/* Tab filters - For you and Following, like Medium's feed tabs */}
      <div className="flex gap-6 border-b border-gray-200 mb-2">
        <button className="text-sm font-medium text-black border-b-2 border-black pb-3">
          For you
        </button>
        <button className="text-sm font-medium text-gray-400 hover:text-black pb-3">
          Following
        </button>
      </div>

      {/* Loop through posts array and render a PostCard for each post */}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

    </div>
  )
}