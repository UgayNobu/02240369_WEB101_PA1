import Link from "next/link"

export default function Footer() {
  return (
    <footer className="p-6 text-center text-gray-400">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <ul className="flex justify-center space-x-6 flex-wrap">
            <li>
              <Link href="#" className="hover:text-green-400 transition-colors">
                Mindfulness
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-400 transition-colors">
                Store
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-400 transition-colors">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} InspiroBot Recreation. This is a student project.
        </p>
      </div>
    </footer>
  )
}