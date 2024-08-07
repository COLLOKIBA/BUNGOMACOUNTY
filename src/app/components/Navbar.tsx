'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import Dropdown from './DropdownMenu';
import DropdownAbout from './DropdownAbout';

interface TenderItem {
  id: number;
  title: string;
  url: string;
}

const Navbar = () => {
  const pathname = usePathname();
  const [tenderItems, setTenderItems] = useState<TenderItem[]>([]);

  useEffect(() => {
    const fetchTenderItems = async () => {
      try {
        const response = await fetch('/api/tenderItems');
        const data = await response.json();
        setTenderItems(data);
      } catch (error) {
        console.error('Error fetching tender items:', error);
      }
    };

    fetchTenderItems();
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/logo.png" alt="Logo" width={250} height={80} />
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link>
          <div className={pathname.startsWith('/pages/about') ? styles.active : ''}>
            <DropdownAbout />
          </div>
          <div className={pathname.startsWith('/pages/Departments') ? styles.active : ''}>
            <Dropdown />
          </div>
          <Link href="/pages/resources" className={pathname === '/pages/resources' ? styles.active : ''}>Resources</Link>
          <Link href="/pages/countyprojects" className={pathname === '/pages/countyprojects' ? styles.active : ''}>County Projects</Link>
          <Link href="/pages/tender" className={pathname === '/pages/tender' ? styles.active : ''}>Tenders</Link>
          <Link href="/pages/newsevents" className={pathname === '/pages/newsevents' ? styles.active : ''}>News & Events</Link>
          <Link href="/pages/jobs" className={pathname === '/pages/jobs' ? styles.active : ''}>Jobs</Link>
          {/* Render dynamic tender items */}
          {tenderItems.map((item) => (
            <Link key={item.id} href={item.url} className={pathname === item.url ? styles.active : ''}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
