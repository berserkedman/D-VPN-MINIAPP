import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

function Home({ setActivePage }) {
  const containerRef = useRef(null);
  const [subStatus] = useState({
    isActive: true,
    endDate: '12.02.2026',
    type: 'Про',
    daysLeft: 30
  });
  const [stats] = useState({ referrals: 8, balance: 150 });

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.card');
    gsap.fromTo(cards, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out' });
  }, []);

  return (
    <div ref={containerRef} className="space-y-5">
      <div className="card glass-card p-6">
        <div className="flex items-center gap-3 mb-5">
          <i className="fas fa-shield-alt text-purple-400 text-2xl"></i>
          <h2 className="text-xl font-bold">Статус подписки</h2>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-white/50 text-sm">Статус</span>
            <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${subStatus.isActive ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>{subStatus.isActive ? 'Активна' : 'Неактивна'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/50 text-sm">Действует до</span>
            <span className="font-semibold">{subStatus.endDate}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/50 text-sm">Тариф</span>
            <span className="text-purple-300 font-semibold">{subStatus.type}</span>
          </div>
        </div>
      </div>
      <div className="card glass-card p-6">
        <h3 className="text-lg font-semibold mb-4">Быстрые действия</h3>
        <div className="space-y-3">
          <button onClick={() => setActivePage('vpn')} className="w-full btn-gradient py-4 rounded-2xl font-semibold flex items-center justify-center gap-2">
            <i className="fas fa-link"></i> Подключиться к VPN
          </button>
          <button onClick={() => setActivePage('payment')} className="w-full glass-card py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 border border-white/10">
            <i className="fas fa-credit-card"></i> Продлить подписку
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="card glass-card p-5">
          <div className="flex items-center gap-2 mb-3"><i className="fas fa-users text-blue-400"></i><span className="text-white/50 text-xs">Рефералов</span></div>
          <p className="text-3xl font-bold">{stats.referrals}<span className="text-white/30 text-lg">/20</span></p>
        </div>
        <div className="card glass-card p-5">
          <div className="flex items-center gap-2 mb-3"><i className="fas fa-wallet text-green-400"></i><span className="text-white/50 text-xs">Баланс</span></div>
          <p className="text-3xl font-bold">{stats.balance} ₽</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
