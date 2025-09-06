'use client'
import Link from 'next/link'
import { HiMiniHome } from "react-icons/hi2"
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div style={{ paddingTop: 8 }} className='nav-box'>
      <Link 
        href="/" 
        className={pathname === "/" ? "nav-item active" : "nav-item"}
      >
        <HiMiniHome /> Dashboard
      </Link>

      <Link 
        href="/favorite" 
        className={pathname === "/favorite" ? "nav-item active" : "nav-item"}
      >
        <MdOutlineFavoriteBorder /> Favorites
      </Link>
    </div>
  )
}