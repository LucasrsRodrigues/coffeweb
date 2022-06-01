import { BiGridAlt, BiX } from "react-icons/bi";
import styles from '@/styles/components/Header.module.scss';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(false);
  const [activeLink, setActiveLink] = useState('');


  function toggleOpenMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 50) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    })
  }, []);


  function handleSetActiveLink(link: string) {
    setActiveLink(link);
    setMenuIsOpen(false);
  }

  return (
    <header className={`${styles.header} ${scrollY ? styles.scroll : ''}`} id="header">
      <Head>
        <title>.:Coffe:.</title>
      </Head>
      <nav className={`${styles.nav} container`}>
        <a href="#" className={styles.logo}>
          <Image src="assets/img/logo.png" alt="" className="nav__logo" />
          Coffe.
        </a>

        <div className={`${styles.menu} ${menuIsOpen ? styles.open : ''}`} id="nav-menu">
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="#home" className={`${styles.link} ${activeLink === 'home' ? styles.activeLink : ''}`} onClick={() => handleSetActiveLink('home')}>Home</a>
            </li>
            <li className={styles.item}>
              <a href="#products" className={`${styles.link} ${activeLink === 'products' ? styles.activeLink : ''}`} onClick={() => handleSetActiveLink('products')}>Produtos</a>
            </li>
            <li className={styles.item}>
              <a href="#premium" className={`${styles.link} ${activeLink === 'premium' ? styles.activeLink : ''}`} onClick={() => handleSetActiveLink('premium')}>Premium</a>
            </li>
            <li className={styles.item}>
              <a href="#blog" className={`${styles.link} ${activeLink === 'blog' ? styles.activeLink : ''}`} onClick={() => handleSetActiveLink('blog')}>Blog</a>
            </li>
          </ul>

          <div className={styles.close} id="nav-close" onClick={toggleOpenMenu}>
            <BiX />
          </div>
        </div>

        {/* Toggle Button */}
        <div className={styles.toggle} id="nav-toggle" onClick={toggleOpenMenu}>
          <BiGridAlt />
        </div>
      </nav>
    </header>
  )
}

export default Header;