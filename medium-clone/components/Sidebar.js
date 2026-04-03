// Sidebar component - displays the left navigation links like Medium's left panel
export default function Sidebar() {

  // Navigation items array - makes it easy to add/remove items later
  const navItems = [
    { icon: "🏠", label: "Home" },
    { icon: "📚", label: "Library" },
    { icon: "👤", label: "Profile" },
    { icon: "📖", label: "Stories" },
    { icon: "📊", label: "Stats" },
  ]

  return (
    // Sidebar container - hidden on mobile, visible on large screens
    <aside className="hidden lg:flex flex-col w-56 pr-8 pt-8 sticky top-16 h-screen">
      
      {/* Navigation links */}
      {navItems.map((item) => (
        <button
          key={item.label}
          className="flex items-center gap-3 text-gray-600 hover:text-black py-2 text-sm font-medium"
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}

      {/* Divider */}
      <hr className="my-4 border-gray-200" />

      {/* Find writers section */}
      <button className="flex items-center gap-3 text-gray-500 hover:text-black py-2 text-sm">
        <span>➕</span>
        <span>Find writers to follow</span>
      </button>

    </aside>
  )
}