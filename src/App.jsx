import { useState, useEffect } from 'react'
import WebApp from '@twa-dev/sdk'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MobileNav from './components/MobileNav'
import Home from './components/pages/Home'
import VPN from './components/pages/VPN'
import Referral from './components/pages/Referral'
import Balance from './components/pages/Balance'
import Payment from './components/pages/Payment'
import Admin from './components/pages/Admin'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [isAdmin, setIsAdmin] = useState(true)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    WebApp.ready()
    WebApp.expand()
    WebApp.setHeaderColor('#000000')
    WebApp.setBackgroundColor('#000000')

    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const pages = {
    home: <Home />,
    vpn: <VPN />,
    referral: <Referral />,
    balance: <Balance />,
    payment: <Payment />,
    admin: <Admin />
  }

  return (
    <div className="min-h-screen bg-black">
      {!isMobile && <Header />}
      <div className="flex">
        {!isMobile && <Sidebar activePage={activePage} setActivePage={setActivePage} isAdmin={isAdmin} />}
        <main className={`flex-1 ${isMobile ? 'pb-24' : 'p-8'} ${!isMobile ? 'ml-64' : ''}`}>
          {isMobile && <Header />}
          <div className={`${isMobile ? 'px-5 py-6' : 'max-w-6xl mx-auto'}`}>
            {pages[activePage]}
          </div>
        </main>
      </div>
      {isMobile && <MobileNav activePage={activePage} setActivePage={setActivePage} isAdmin={isAdmin} />}
    </div>
  )
}

export default App
