import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import QRCode from 'qrcode.react'

function VPN() {
  const containerRef = useRef(null)
  const [copied, setCopied] = useState(false)
  const vpnLink = 'http://45.123.45.67/sub/user123token456xyz'

  useEffect(() => {
    gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 })
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(vpnLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div ref={containerRef} className="space-y-5">
      <div className="glass-card p-6 rounded-3xl">
        <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
          <i className="fas fa-link text-purple-400"></i>Подключение к VPN
        </h2>
        <div className="bg-zinc-900/40 rounded-2xl p-6 mb-5 flex items-center justify-center border border-white/5">
          <QRCode value={vpnLink} size={200} bgColor="#00000000" fgColor="#ffffff" level="H" />
        </div>
        <div className="glass-card p-4 mb-4 rounded-xl border border-white/5">
          <p className="text-white/40 text-xs mb-2">Ссылка подключения:</p>
          <p className="text-white/80 text-xs font-mono break-all">{vpnLink}</p>
        </div>
        <button onClick={handleCopy} className="w-full btn-gradient py-3.5 rounded-xl font-medium">
          <i className={`fas ${copied ? 'fa-check' : 'fa-copy'} mr-2`}></i>
          {copied ? 'Скопировано' : 'Скопировать ссылку'}
        </button>
      </div>
    </div>
  )
}

export default VPN
