import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Balance() {
  const containerRef = useRef(null)
  const transactions = [
    { id: 1, date: '10.01.2026', type: 'Начисление', amount: 50, desc: 'Рефералы', color: 'green' },
    { id: 2, date: '05.01.2026', type: 'Списание', amount: -100, desc: 'Оплата подписки', color: 'red' },
    { id: 3, date: '01.01.2026', type: 'Начисление', amount: 200, desc: 'Пополнение', color: 'green' }
  ]

  useEffect(() => {
    gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 })
  }, [])

  return (
    <div ref={containerRef} className="space-y-5">
      <div className="glass-card p-6 rounded-3xl">
        <div className="flex items-center gap-3 mb-4">
          <i className="fas fa-wallet text-purple-400 text-2xl"></i>
          <h2 className="text-xl font-bold">Баланс</h2>
        </div>
        <div className="bg-purple-600/10 rounded-2xl p-8 border border-purple-500/15">
          <p className="text-white/50 text-sm mb-2">Доступно</p>
          <p className="text-6xl font-bold">150 ₽</p>
        </div>
      </div>
      <div className="glass-card p-6 rounded-3xl">
        <h3 className="text-lg font-semibold mb-5"><i className="fas fa-history text-blue-400 mr-2"></i>История</h3>
        <div className="space-y-3">
          {transactions.map(tx => (
            <div key={tx.id} className="glass-card p-4 rounded-xl border border-white/5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium">{tx.desc}</p>
                  <p className="text-white/40 text-xs mt-1">{tx.date}</p>
                </div>
                <span className={`text-lg font-bold ${tx.color === 'green' ? 'text-green-400' : 'text-red-400'}`}>
                  {tx.amount > 0 ? '+' : ''}{tx.amount} ₽
                </span>
              </div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                tx.color === 'green' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}>{tx.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Balance
