import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

function Admin() {
  const containerRef = useRef(null)
  const [activeTab, setActiveTab] = useState('stats')

  useEffect(() => {
    gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 })
  }, [])

  const stats = { users: 1247, active: 892, revenue: 89200, newToday: 23 }
  const users = [
    { id: 1, name: 'Иван И.', status: 'active', sub: '12.02.26', ref: 'Петр С.', refs: 5 },
    { id: 2, name: 'Мария К.', status: 'inactive', sub: '01.01.26', ref: '-', refs: 0 },
    { id: 3, name: 'Алексей В.', status: 'active', sub: '20.02.26', ref: 'Иван И.', refs: 2 }
  ]

  return (
    <div ref={containerRef} className="space-y-5">
      <div className="glass-card p-6 rounded-3xl">
        <div className="flex items-center gap-3 mb-5">
          <i className="fas fa-crown text-yellow-400 text-2xl"></i>
          <h2 className="text-xl font-bold">Админ-панель</h2>
        </div>
        <div className="flex gap-2 mb-5 overflow-x-auto">
          {['stats', 'users', 'subs', 'refs', 'finance', 'vpn'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab ? 'btn-gradient' : 'glass-card border border-white/10'
              }`}
            >
              {tab === 'stats' && 'Статистика'}
              {tab === 'users' && 'Пользователи'}
              {tab === 'subs' && 'Подписки'}
              {tab === 'refs' && 'Рефералы'}
              {tab === 'finance' && 'Финансы'}
              {tab === 'vpn' && 'VPN'}
            </button>
          ))}
        </div>

        {activeTab === 'stats' && (
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-5 rounded-2xl">
              <div className="flex items-center gap-2 mb-3"><i className="fas fa-users text-blue-400"></i><span className="text-white/50 text-xs">Всего</span></div>
              <p className="text-3xl font-bold">{stats.users}</p>
            </div>
            <div className="glass-card p-5 rounded-2xl">
              <div className="flex items-center gap-2 mb-3"><i className="fas fa-check text-green-400"></i><span className="text-white/50 text-xs">Активных</span></div>
              <p className="text-3xl font-bold text-green-400">{stats.active}</p>
            </div>
            <div className="glass-card p-5 rounded-2xl">
              <div className="flex items-center gap-2 mb-3"><i className="fas fa-dollar-sign text-yellow-400"></i><span className="text-white/50 text-xs">Доход</span></div>
              <p className="text-2xl font-bold">{stats.revenue} ₽</p>
            </div>
            <div className="glass-card p-5 rounded-2xl">
              <div className="flex items-center gap-2 mb-3"><i className="fas fa-user-plus text-purple-400"></i><span className="text-white/50 text-xs">Новых</span></div>
              <p className="text-3xl font-bold text-purple-400">+{stats.newToday}</p>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="space-y-3">
            {users.map(user => (
              <div key={user.id} className="glass-card p-4 rounded-xl border border-white/5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-white/40 text-xs mt-1">ID: {user.id} • Подписка: {user.sub}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    user.status === 'active' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                  }`}>
                    {user.status === 'active' ? 'Активен' : 'Неактивен'}
                  </span>
                </div>
                <p className="text-white/60 text-sm mb-3"><i className="fas fa-user-friends text-xs mr-2"></i>Пригласил: {user.ref} • Рефералов: {user.refs}</p>
                <div className="flex gap-2">
                  <button className="flex-1 glass-card py-2 rounded-lg text-xs border border-white/10">Просмотр</button>
                  <button className="flex-1 glass-card py-2 rounded-lg text-xs border border-white/10">Блокировка</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'subs' && (
          <div className="space-y-3">
            <button className="w-full glass-card p-4 rounded-xl border border-white/10 text-left hover:border-white/20 transition-all">
              <i className="fas fa-plus-circle text-green-400 mr-3"></i>Продлить подписку пользователю
            </button>
            <button className="w-full glass-card p-4 rounded-xl border border-white/10 text-left hover:border-white/20 transition-all">
              <i className="fas fa-times-circle text-red-400 mr-3"></i>Отключить подписку
            </button>
            <button className="w-full glass-card p-4 rounded-xl border border-white/10 text-left hover:border-white/20 transition-all">
              <i className="fas fa-gift text-purple-400 mr-3"></i>Выдать подарочные дни
            </button>
          </div>
        )}

        {activeTab === 'refs' && (
          <div className="space-y-4">
            <div className="glass-card p-4 rounded-xl border border-white/5">
              <label className="text-sm text-white/60 block mb-2">Процент вознаграждения ()</label>
              <input type="number" defaultValue="10" className="w-full glass-card px-4 py-3 rounded-lg border border-white/10" />
            </div>
            <div className="glass-card p-4 rounded-xl border border-white/5">
              <label className="text-sm text-white/60 block mb-2">Лимит приглашений</label>
              <input type="number" defaultValue="20" className="w-full glass-card px-4 py-3 rounded-lg border border-white/10" />
            </div>
            <button className="w-full btn-gradient py-3 rounded-xl font-medium">Применить изменения</button>
            <button className="w-full glass-card py-3 rounded-xl font-medium border border-white/10">Пересчитать начисления</button>
          </div>
        )}

        {activeTab === 'finance' && (
          <div className="space-y-3">
            <div className="bg-purple-600/10 rounded-xl p-5 border border-purple-500/15">
              <p className="text-white/60 text-sm mb-2">Общий оборот</p>
              <p className="text-4xl font-bold">89 200 ₽</p>
            </div>
            <button className="w-full glass-card p-4 rounded-xl border border-white/10 text-left">
              <i className="fas fa-history text-blue-400 mr-3"></i>История платежей
            </button>
            <button className="w-full glass-card p-4 rounded-xl border border-white/10 text-left">
              <i className="fas fa-coins text-yellow-400 mr-3"></i>Реферальные начисления
            </button>
          </div>
        )}

        {activeTab === 'vpn' && (
          <div className="space-y-3">
            <button className="w-full glass-card p-4 rounded-xl border border-white/10 text-left hover:border-white/20 transition-all">
              <i className="fas fa-sync text-blue-400 mr-3"></i>Пересоздать конфигурацию
            </button>
            <button className="w-full glass-card p-4 rounded-xl border border-white/10 text-left hover:border-white/20 transition-all">
              <i className="fas fa-ban text-red-400 mr-3"></i>Отключить VPN-доступ
            </button>
            <button className="w-full glass-card p-4 rounded-xl border border-white/10 text-left hover:border-white/20 transition-all">
              <i className="fas fa-link text-green-400 mr-3"></i>Выдать новую ссылку
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Admin
