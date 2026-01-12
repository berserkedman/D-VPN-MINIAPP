import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Payment() {
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 })
  }, [])

  return (
    <div ref={containerRef} className="space-y-5">
      <div className="glass-card p-6 rounded-3xl">
        <div className="flex items-center gap-3 mb-5">
          <i className="fas fa-credit-card text-purple-400 text-2xl"></i>
          <h2 className="text-xl font-bold">Оплата</h2>
        </div>
        <div className="bg-green-500/10 rounded-xl p-5 mb-5 border border-green-500/20">
          <div className="flex items-center gap-3">
            <i className="fas fa-check-circle text-green-400 text-2xl"></i>
            <div>
              <p className="font-semibold">Подписка активна</p>
              <p className="text-white/50 text-sm">До 12.02.2026</p>
            </div>
          </div>
        </div>
        <div className="bg-zinc-900/40 rounded-2xl p-6 border border-white/5">
          <h3 className="font-bold text-lg mb-4">Тариф "Про"</h3>
          <div className="space-y-2 mb-6 text-white/70 text-sm">
            <div><i className="fas fa-check text-green-400 w-5 inline-block"></i> Безлимитный трафик</div>
            <div><i className="fas fa-check text-green-400 w-5 inline-block"></i> Высокая скорость</div>
            <div><i className="fas fa-check text-green-400 w-5 inline-block"></i> 5 устройств</div>
            <div><i className="fas fa-check text-green-400 w-5 inline-block"></i> Поддержка 24/7</div>
          </div>
          <div className="mb-6">
            <span className="text-5xl font-bold">100 ₽</span>
            <span className="text-white/40 ml-2">/месяц</span>
          </div>
          <div className="space-y-3">
            <button className="w-full btn-gradient py-4 rounded-xl font-semibold">Продлить</button>
            <button className="w-full glass-card py-4 rounded-xl font-semibold border border-white/10">Оплатить со счёта</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
