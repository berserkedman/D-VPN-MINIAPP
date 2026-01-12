import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Sidebar({ activePage, setActivePage, isAdmin }) {
  const sidebarRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(sidebarRef.current, 
      { opacity: 0, x: -30 }, 
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
    )
  }, [])

  const navItems = [
    { id: 'home', icon: 'fa-home', label: 'Главная' },
    { id: 'vpn', icon: 'fa-shield-alt', label: 'VPN' },
    { id: 'referral', icon: 'fa-users', label: 'Реферальная программа' },
    { id: 'balance', icon: 'fa-wallet', label: 'Баланс' },
    { id: 'payment', icon: 'fa-credit-card', label: 'Оплата' }
  ]

  if (isAdmin) navItems.push({ id: 'admin', icon: 'fa-crown', label: 'Админ-панель' })

  return (
    <aside ref={sidebarRef} className="fixed left-0 top-0 h-screen w-64 glass-sidebar z-50 overflow-y-auto hidden md:block">
      <div className="p-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold logo-gradient">D-VPN</h2>
          <p className="text-white/40 text-xs mt-2">Premium VPN Service</p>
        </div>
        
        <nav className="space-y-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full nav-item-desktop flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                activePage === item.id 
                  ? 'active border-purple-500/30 bg-purple-600/15' 
                  : 'border-white/5 hover:bg-purple-600/5'
              }`}
            >
              <i className={`fas ${item.icon} text-lg ${
                activePage === item.id ? 'text-purple-400' : 'text-white/60'
              }`}></i>
              <span className={`text-sm font-medium ${
                activePage === item.id ? 'text-white' : 'text-white/70'
              }`}>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-8 glass-card p-4 rounded-xl border border-white/5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
              <i className="fas fa-user text-purple-400"></i>
            </div>
            <div>
              <p className="text-sm font-semibold">Пользователь</p>
              <p className="text-xs text-white/40">ID: 123456</p>
            </div>
          </div>
          <button className="w-full glass-card py-2 rounded-lg text-xs border border-white/10 hover:border-white/20 transition-all">
            <i className="fas fa-cog mr-2"></i>Настройки
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
