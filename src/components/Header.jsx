import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Header() {
  const headerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    )
  }, [])

  return (
    <header ref={headerRef} className="sticky top-0 z-50 glass-panel">
      <div className="px-6 py-5">
        <h1 className="text-4xl font-extrabold text-center logo-gradient tracking-[0.15em]">
          D-VPN
        </h1>
      </div>
    </header>
  )
}

export default Header
