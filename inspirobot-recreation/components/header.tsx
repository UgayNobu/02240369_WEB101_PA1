"use client"

import Link from "next/link"
import { Menu } from 'lucide-react'
import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <header className="p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-green-400">
          INSPIROBOT
        </Link>
      </div>
      
      <div className="md:hidden">
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white"
        >
          <Menu />
        </button>
      </div>
      
      <nav className={`${menuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="md:flex space-y-2 md:space-y-0 md:space-x-6">
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
        </ul>
      </nav>
    </header>
  )
}