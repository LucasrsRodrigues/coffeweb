import styles from '@/styles/components/ScrollUp.module.scss';
import { useEffect, useState } from 'react';

import { AiOutlineArrowUp } from 'react-icons/ai';

function ScrollUp() {
  const [scrollY, setScrollY] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {


      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY >= 350) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [scrollY]);

  return (
    <a href="#" className={`${styles.scrollup} ${scrollY ? styles.show : ''}`}>
      <AiOutlineArrowUp />
    </a>
  )
}


export { ScrollUp };