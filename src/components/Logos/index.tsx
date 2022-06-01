import styles from '@/styles/components/Logos.module.scss';
import Image from 'next/image';

function Logos() {
  return (
    <section className={`${styles.logo} section`}>
      <div className={`${styles.logo__container} container grid`}>
        <Image src="assets/img/logocoffee1.png" alt="" className={styles.logo__img} />
        <Image src="assets/img/logocoffee2.png" alt="" className={styles.logo__img} />
        <Image src="assets/img/logocoffee3.png" alt="" className={styles.logo__img} />
        <Image src="assets/img/logocoffee4.png" alt="" className={styles.logo__img} />
        <Image src="assets/img/logocoffee5.png" alt="" className={styles.logo__img} />
      </div>
    </section>
  )
}

export { Logos }