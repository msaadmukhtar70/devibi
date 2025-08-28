'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// eslint-disable-next-line react/prop-types
const Navbar = ({ mobileMenu, setMobileMenu, color }) => {
  const [mobileSubMenu, setMobileSubMenu] = useState('');
  const [menuTitle, setMenuTitle] = useState('');

  const handleMenu = () => {
    setMobileMenu(false);
    setMobileSubMenu('');
  };

  const openMobileSubMenu = (e, id, title) => {
    e.preventDefault();
    setMobileSubMenu(id);
    setMenuTitle(title);
  };

  const handleGoBack = () => setMobileSubMenu('');

  return (
    <div className="menu-block-wrapper">
      <div onClick={handleMenu} className={`menu-overlay ${mobileMenu && 'active'}`} />
      <nav className={`menu-block ${mobileMenu && 'active'}`} id="append-menu-header">
        <div className={`mobile-menu-head ${mobileSubMenu && 'active'}`}>
          <button onClick={handleGoBack} className="go-back" aria-label="Back">
            <Image
              className="dropdown-icon"
              src="/assets/img_placeholder/icon-black-long-arrow-right.svg"
              alt="back"
              width={16}
              height={16}
            />
          </button>
          <div className="current-menu-title">{menuTitle}</div>
          <button onClick={handleMenu} className="mobile-menu-close" aria-label="Close menu">
            ×
          </button>
        </div>

        <ul className={`site-menu-main ${color}`}>
          <li className="nav-item">
            <Link href="/" className="nav-link-item">Home</Link>
          </li>

          {/* Services — desktop keeps ONE trigger for alignment; mobile has a separate toggle button */}
          <li className="nav-item nav-item-has-children">
            {/* Desktop/Tablet trigger (also a real link). Keeping it as a single element preserves alignment/pointer. */}
            <Link href="/services" className="nav-link-item drop-trigger flex items-center gap-1">
              <span>Services</span>
              <Image
                className="dropdown-icon hidden md:inline-block"
                src="/assets/img_placeholder/icon-black-cheveron-right.svg"
                alt=""
                width={16}
                height={16}
              />
            </Link>

            {/* Mobile-only submenu toggle (doesn't render on md+ so it can't disturb alignment) */}
            <button
              onClick={(e) => openMobileSubMenu(e, 1, 'Services')}
              className="ml-2 p-2 md:hidden"
              aria-expanded={mobileSubMenu === 1}
              aria-controls="submenu-1"
              aria-label="Open Services submenu"
            >
              <Image
                className="dropdown-icon"
                src="/assets/img_placeholder/icon-black-cheveron-right.svg"
                alt="open"
                width={16}
                height={16}
              />
            </button>

            <ul className={`sub-menu ${mobileSubMenu === 1 && 'active'}`} id="submenu-1">
              <li className="sub-menu--item"><Link href="/services/launch-blueprint">Launch Blueprint</Link></li>
              <li className="sub-menu--item"><Link href="/services/mvp-sprint">MVP Sprint</Link></li>
              <li className="sub-menu--item"><Link href="/services/practical-ai">Practical AI</Link></li>
              <li className="sub-menu--item"><Link href="/services/activation-lift">Activation Lift</Link></li>
              <li className="sub-menu--item"><Link href="/services/mobile-app-design">Mobile App Design</Link></li>
              <li className="sub-menu--item"><Link href="/services/web-design">Web Design</Link></li>
            </ul>
          </li>

          <li className="nav-item">
            <Link href="/portfolio" className="nav-link-item">Work</Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link-item">About</Link>
          </li>
          <li className="nav-item">
            <Link href="/blogs" className="nav-link-item">Insights</Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link-item">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
