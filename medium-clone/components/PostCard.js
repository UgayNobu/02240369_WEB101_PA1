// PostCard component - reusable card that displays a single blog post
// This is the main reusable component, used by PostList to render each post
export default function PostCard({ post }) {
  return (
    // Card container with bottom border
    <div className="flex flex-col py-6 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
      
      {/* Author info row */}
      <div className="flex items-center gap-2 mb-3">
        {/* Author avatar - first letter of author name */}
        <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-bold">
          {post.author.charAt(0)}
        </div>
        {/* Author name */}
        <span className="text-sm font-medium text-gray-700">{post.author}</span>
      </div>

      {/* Post content row - text on left, image placeholder on right */}
      <div className="flex justify-between items-start gap-4">
        
        {/* Left side - title and description */}
        <div className="flex-1">
          {/* Post title */}
          <h2 className="text-lg font-bold text-gray-900 mb-1 leading-snug">
            {post.title}
          </h2>
          {/* Post description - hidden on mobile */}
          <p className="text-gray-500 text-sm hidden md:block leading-relaxed">
            {post.description}
          </p>
        </div>

        {/* Right side - image placeholder */}
        <div className="w-24 h-16 md:w-32 md:h-20 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-gray-400 text-xs">
          IMG
        </div>

      </div>

      {/* Bottom row - tag, date, read time, claps, comments */}
      <div className="flex items-center gap-3 mt-3 text-xs text-gray-400 flex-wrap">
        {/* Tag badge */}
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
          {post.tag}
        </span>
        {/* Date */}
        <span>{post.date}</span>
        {/* Read time */}
        <span>{post.readTime}</span>
        {/* Claps */}
        <span>👏 {post.claps}</span>
        {/* Comments */}
        <span>💬 {post.comments}</span>
      </div>

    </div>
  )
}