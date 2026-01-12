import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

function Referral() {
  const containerRef = useRef(null)
  const [copied, setCopied] = useState(false)
  const refLink = 'https://t.me/dvpn_bot?start=ref123456'

  useEffect(() => {
    gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 })
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(refLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div ref={containerRef} className="space-y-5">
      <div className="glass-card p-6 rounded-3xl">
        <div className="flex items-center gap-3 mb-4">
          <i className="fas fa-users text-purple-400 text-2xl"></i>
          <h2 className="text-xl font-bold">Реферальная программа</h2>
        </div>
        <p className="text-white/60 text-sm mb-5">
          Приглашай друзей и получай <strong className="text-green-400">10 ₽</strong> в месяц. Максимум 20.
        </p>
        <div className="glass-card p-4 mb-4 rounded-xl border border-white/5">
          <p className="text-white/40 text-xs mb-2">Твоя реферальная ссылка:</p>
          <p className="text-white/80 text-sm font-mono break-all">{refLink}</p>
        </div>
        <button onClick={handleCopy} className="w-full btn-gradient py-3.5 rounded-xl font-medium">
          <i className={`fas ${copied ? 'fa-check' : 'fa-share-alt'} mr-2`}></i>
          {copied ? 'Скопировано' : 'Поделиться ссылкой'}
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="glass-card p-5 rounded-2xl">
          <div className="flex items-center gap-2 mb-3"><i className="fas fa-user-plus text-blue-400"></i><span className="text-white/50 text-xs">Всего</span></div>
          <p className="text-3xl font-bold">8<span className="text-white/30 text-lg">/20</span></p>
        </div>
        <div className="glass-card p-5 rounded-2xl">
          <div className="flex items-center gap-2 mb-3"><i className="fas fa-check-circle text-green-400"></i><span className="text-white/50 text-xs">Активных</span></div>
          <p className="text-3xl font-bold text-green-400">5</p>
        </div>
      </div>
      <div className="glass-card p-6 rounded-3xl">
        <h3 className="font-semibold mb-4">Доход за месяц</h3>
        <div className="bg-purple-600/10 rounded-2xl p-6 border border-purple-500/15">
          <p className="text-5xl font-bold text-center mb-3">50 ₽</p>
          <p className="text-white/40 text-center text-sm">5 активных × 10 ₽</p>
        </div>
      </div>
    </div>
  )
}

export default Referral
