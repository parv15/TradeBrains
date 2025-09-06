'use client'
import Search from './search'

export default function NavBar(){
  return (
    <div className="topbar">
      <div >
        <div style={{fontSize:'2rem',fontWeight:800 , color:"#ffff" , marginBottom:6}}>Find Your Next Investment</div>
      <div style={{marginBottom:20,color:'var(--muted)'}}>Search for stocks by their symbol or company name to get real-time data and insights.</div>
        <div className="search-sm">
          <Search />
        </div>
      </div>
    </div>
  )
}