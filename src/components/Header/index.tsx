import { BiGridAlt, BiX } from "react-icons/bi";
import styles from '@/styles/components/Header.module.scss';
import { useEffect, useState } from "react";

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(false);

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

  return (
    <header className={`${styles.header} ${scrollY ? styles.scroll : ''}`} id="header">
      <nav className={`${styles.nav} container`}>
        <a href="#" className={styles.logo}>
          <img src="assets/img/logo.png" alt="" className="nav__logo" />
          Coffe.
        </a>

        <div className={`${styles.menu} ${menuIsOpen ? styles.open : ''}`} id="nav-menu">
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="#home" className={styles.link}>Home</a>
            </li>
            <li className={styles.item}>
              <a href="#products" className={styles.link}>Products</a>
            </li>
            <li className={styles.item}>
              <a href="#premium" className={styles.link}>Premium</a>
            </li>
            <li className={styles.item}>
              <a href="#blog" className={styles.link}>Blog</a>
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