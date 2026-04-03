// Navbar component - displays the top navigation bar like Medium's header
export default function Navbar() {
  return (
    // Main navbar container with border at bottom
    <nav className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white sticky top-0 z-10">
      
      {/* Left side - Medium logo */}
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold font-serif">Medium</h1>
      </div>

      {/* Middle - Search bar, hidden on mobile */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
        <span className="text-gray-400 mr-2">🔍</span>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* Right side - navigation buttons */}
      <div className="flex items-center gap-4">
        {/* Write button - hidden on mobile */}
        <button className="hidden md:flex items-center gap-1 text-gray-600 text-sm hover:text-black">
          ✏️ Write
        </button>

        {/* Sign in button */}
        <button className="text-sm text-gray-600 hover:text-black">
          Sign In
        </button>

        {/* Get started button */}
        <button className="bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800">
          Get Started
        </button>
      </div>
    </nav>
  )
}