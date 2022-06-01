import styles from '@/styles/components/Loader.module.scss';
import { useEffect, useState } from 'react';

function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2500);
  }, []);

  return (
    <div className={`${styles.load} ${show ? styles.show : ''}`} id="load">
      <img src="assets/img/loadcoffee.gif" alt="Carregando..." />
    </div>
  )
}

export { Loader }