import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/Collections', label: 'Collection' },
  { to: '/placeOrder', label: 'PlaceOrder' },
  { to: '/trackOrder', label: 'TrackOrder' },
];

// Desktop: animated underline that grows from the left, no layout shift
const desktopLink = ({ isActive, hasPassedHero }) =>
  `relative py-1 transition-colors duration-300 hover:text-yellow-600
   after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left
   after:bg-yellow-600 after:transition-transform after:duration-300
   ${isActive
     ? 'text-yellow-600 after:scale-x-100'
     : `${hasPassedHero ? 'text-stone-700' : 'text-white'} after:scale-x-0 hover:after:scale-x-100`}`;

// Mobile: full-width tappable rows
const mobileLink = ({ isActive, hasPassedHero }) =>
  `block rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200 hover:bg-white/10
   ${isActive
     ? hasPassedHero
       ? 'text-yellow-700 bg-yellow-50'
       : 'text-yellow-500 bg-white/10'
     : hasPassedHero
       ? 'text-stone-700 hover:bg-stone-100'
       : 'text-white'}`;

function Navbar() {
  const [open, setOpen] = useState(false);
  const [hasPassedHero, setHasPassedHero] = useState(false);
  const location = useLocation();

  // Close the menu with the Escape key
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const hero = document.querySelector('section');

    if (!hero) {
      setHasPassedHero(window.scrollY > 72);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setHasPassedHero(!entry.isIntersecting),
      { rootMargin: '-72px 0px 0px 0px' },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b transition-colors duration-300 ${
        hasPassedHero
          ? 'border-stone-200 bg-white/90 text-stone-900 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

        {/* Top bar */}
        <div className="flex items-center justify-between gap-4">

          {/* Brand */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-lg sm:text-xl font-bold tracking-wide transition-colors hover:text-yellow-600"
          >
            Aura Essence
          </Link>

          {/* Navigation Links (desktop) */}
          <ul className="hidden lg:flex items-center gap-8 text-base xl:text-lg font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => desktopLink({ isActive, hasPassedHero })}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right side: Action Button + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden sm:inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-5 rounded-lg transition-all duration-200 shadow-md hover:scale-105 active:scale-95"
            >
              <i className="bi bi-download"></i>
              Download App
            </button>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={`lg:hidden flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-200 active:scale-95 ${
                hasPassedHero
                  ? 'border-stone-300 bg-stone-100 text-stone-800 hover:bg-stone-200'
                  : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile menu: smooth height animation */}
        <div
          id="mobile-menu"
          className={`lg:hidden grid transition-[grid-template-rows,visibility] duration-300 ease-out
            ${open ? 'grid-rows-[1fr] visible' : 'grid-rows-[0fr] invisible'}`}
        >
          <div className="overflow-hidden">
            <div
              className={`mt-3 rounded-2xl border p-2 shadow-xl backdrop-blur-md ${
                hasPassedHero
                  ? 'border-stone-200 bg-white/95'
                  : 'border-white/10 bg-black/80'
              }`}
            >
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) => mobileLink({ isActive, hasPassedHero })}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Button shows here only on phones; on larger screens it's in the top bar */}
              <button
                type="button"
                className="sm:hidden mt-2 w-full inline-flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-xl transition-all duration-200 active:scale-95"
              >
                <i className="bi bi-download"></i>
                Download App
              </button>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;