function Navigation({ activePage, setActivePage, isAdmin }) {
  const navItems = [
    { id: 'home', icon: 'fa-home', label: 'Главная' },
    { id: 'vpn', icon: 'fa-shield-alt', label: 'VPN' },
    { id: 'referral', icon: 'fa-users', label: 'Рефералы' },
    { id: 'balance', icon: 'fa-wallet', label: 'Баланс' },
    { id: 'payment', icon: 'fa-credit-card', label: 'Оплата' }
  ]

  if (isAdmin) navItems.push({ id: 'admin', icon: 'fa-crown', label: 'Админ' })

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-panel border-t border-white/5 z-50">
      <div className="max-w-md mx-auto px-2 py-3">
        <div className="flex justify-around items-center">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 ${
                activePage === item.id ? 'bg-purple-600/15 border border-purple-500/25' : ''
              }`}
            >
              <i className={`fas ${item.icon} text-base`}></i>
              <span className="text-[9px] font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
