import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.card')
    gsap.fromTo(cards,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' }
    )
  }, [])

  return (
    <div ref={containerRef} className="space-y-5">
      <div className="card glass-card p-6 rounded-3xl">
        <div className="flex items-center gap-3 mb-5">
          <i className="fas fa-shield-alt text-purple-400 text-2xl"></i>
          <h2 className="text-xl font-bold">Статус подписки</h2>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-white/50 text-sm">Статус</span>
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20">Активна</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/50 text-sm">Действует до</span>
            <span className="font-semibold">12.02.2026</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/50 text-sm">Тариф</span>
            <span className="text-purple-300 font-semibold">Про</span>
          </div>
        </div>
      </div>
      <div className="card glass-card p-6 rounded-3xl">
        <h3 className="text-lg font-semibold mb-4">Быстрые действия</h3>
        <div className="space-y-3">
          <button className="w-full btn-gradient py-4 rounded-2xl font-semibold">
            <i className="fas fa-link mr-2"></i>Подключиться к VPN
          </button>
          <button className="w-full glass-card py-4 rounded-2xl font-semibold border border-white/10 hover:border-white/15 transition-all">
            <i className="fas fa-credit-card mr-2"></i>Продлить подписку
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="card glass-card p-5 rounded-2xl">
          <div className="flex items-center gap-2 mb-3">
            <i className="fas fa-users text-blue-400"></i>
            <span className="text-white/50 text-xs">Рефералов</span>
          </div>
          <p className="text-3xl font-bold">8<span className="text-white/30 text-lg">/20</span></p>
        </div>
        <div className="card glass-card p-5 rounded-2xl">
          <div className="flex items-center gap-2 mb-3">
            <i className="fas fa-wallet text-green-400"></i>
            <span className="text-white/50 text-xs">Баланс</span>
          </div>
          <p className="text-3xl font-bold">150 ₽</p>
        </div>
      </div>
    </div>
  )
}

export default Home
