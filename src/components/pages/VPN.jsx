import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import QRCode from 'qrcode.react';

function VPN() {
  const containerRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [selectedOS, setSelectedOS] = useState(null);
  const [vpnLink] = useState('vless://550e8400-e29b-41d4-a716-446655440000@45.123.45.67:443?encryption=none&security=tls&sni=45.123.45.67&type=ws&path=/vless#D-VPN-User');

  useEffect(() => {
    gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(vpnLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const openDeeplink = (platform) => {
    if (platform === 'android') {
      const deeplink = `v2rayng://install-config?url=${encodeURIComponent(vpnLink)}`;
      window.location.href = deeplink;
    } else if (platform === 'ios') {
      const deeplink = `shadowrocket://add/${encodeURIComponent(vpnLink)}`;
      window.location.href = deeplink;
    }
  };

  return (
    <div ref={containerRef} className="space-y-6">
      <div className="glass-card p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center border border-purple-500/30">
            <span className="text-xl font-bold text-purple-400">1</span>
          </div>
          <h2 className="text-xl font-bold">Установить Hiddify</h2>
        </div>
        <p className="text-white/60 text-sm mb-5">Выберите операционную систему:</p>
        <div className="space-y-3">
          <button onClick={() => { setSelectedOS('android'); window.open('https://play.google.com/store/apps/details?id=ang.hiddify.com', '_blank'); }} className={`w-full glass-card py-4 px-5 rounded-xl flex items-center gap-4 border ${selectedOS === 'android' ? 'border-purple-500/50 bg-purple-600/10' : 'border-white/10'}`}>
            <i className="fab fa-android text-3xl"></i>
            <div className="flex-1 text-left"><p className="font-semibold">Android</p><p className="text-white/40 text-xs">Google Play</p></div>
            {selectedOS === 'android' && <i className="fas fa-check text-green-400"></i>}
          </button>
          <button onClick={() => { setSelectedOS('ios'); window.open('https://apps.apple.com/app/hiddify-proxy-vpn/id6596777532', '_blank'); }} className={`w-full glass-card py-4 px-5 rounded-xl flex items-center gap-4 border ${selectedOS === 'ios' ? 'border-purple-500/50 bg-purple-600/10' : 'border-white/10'}`}>
            <i className="fab fa-apple text-3xl"></i>
            <div className="flex-1 text-left"><p className="font-semibold">iOS</p><p className="text-white/40 text-xs">App Store</p></div>
            {selectedOS === 'ios' && <i className="fas fa-check text-green-400"></i>}
          </button>
        </div>
      </div>
      {selectedOS && (
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
              <span className="text-xl font-bold text-blue-400">2</span>
            </div>
            <h2 className="text-xl font-bold">Подключение</h2>
          </div>
          <div className="glass-card p-4 mb-4 border border-white/5">
            <p className="text-white/40 text-xs mb-2">VPN ссылка:</p>
            <p className="text-white/80 text-xs font-mono break-all">{vpnLink}</p>
          </div>
          <button onClick={handleCopy} className="w-full btn-gradient py-3.5 rounded-xl font-medium mb-4">
            <i className={`fas ${copied ? 'fa-check' : 'fa-copy'} mr-2`}></i>
            {copied ? 'Скопировано!' : 'Копировать ссылку'}
          </button>
          <button onClick={() => openDeeplink(selectedOS)} className="w-full glass-card py-3.5 rounded-xl font-medium border border-white/10 mb-5">
            <i className="fas fa-external-link-alt mr-2"></i>Открыть в {selectedOS === 'android' ? 'Android' : 'iOS'}
          </button>
          <div className="text-center bg-white p-4 rounded-xl">
            <QRCode value={vpnLink} size={200} />
          </div>
        </div>
      )}
    </div>
  );
}
export default VPN;
