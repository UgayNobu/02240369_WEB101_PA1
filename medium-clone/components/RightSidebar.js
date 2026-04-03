// RightSidebar component - displays Staff Picks and Recommended Topics
// like Medium's right panel
export default function RightSidebar() {

  // Staff picks data - will come from backend later
  const staffPicks = [
    {
      id: 1,
      author: "Tshering Dorji",
      title: "Gross National Happiness: A Framework for Modern Living",
      date: "Mar 15"
    },
    {
      id: 2,
      author: "Karma Wangchuk",
      title: "Hiking the Snowman Trek: Bhutan's Most Challenging Trail",
      date: "Jan 10"
    },
    {
      id: 3,
      author: "Pema Lhamo",
      title: "How Bhutan Became Carbon Negative Against All Odds",
      date: "Feb 22"
    }
  ]

  // Recommended topics data
  const topics = [
    "Culture", "Travel", "Environment",
    "Technology", "Art", "GNH",
    "Productivity", "Education"
  ]

  return (
    // Right sidebar container - hidden on mobile, visible on large screens
    <aside className="hidden lg:flex flex-col w-80 pl-8 pt-8 sticky top-16 h-screen border-l border-gray-200">

      {/* Staff Picks section */}
      <h3 className="font-bold text-base mb-4">Staff Picks</h3>

      {/* Loop through staff picks and render each one */}
      {staffPicks.map((pick) => (
        <div key={pick.id} className="mb-4 cursor-pointer hover:opacity-75">
          {/* Author info */}
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold">
              {pick.author.charAt(0)}
            </div>
            <span className="text-xs text-gray-600">{pick.author}</span>
          </div>
          {/* Title */}
          <p className="text-sm font-bold text-gray-900 leading-snug">
            {pick.title}
          </p>
          {/* Date */}
          <p className="text-xs text-gray-400 mt-1">{pick.date}</p>
        </div>
      ))}

      {/* Divider */}
      <hr className="my-4 border-gray-200" />

      {/* Recommended Topics section */}
      <h3 className="font-bold text-base mb-4">Recommended Topics</h3>

      {/* Topics grid */}
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <button
            key={topic}
            className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-gray-200"
          >
            {topic}
          </button>
        ))}
      </div>

    </aside>
  )
}