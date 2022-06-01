import styles from '@/styles/components/Speciality.module.scss';
import { Button } from '@/components/Button';
import Image from 'next/image';

function Speciality() {
  return (
    <section className={`${styles.spec} section container`} id="speciality">
      <div className={styles.spec__container}>
        <div className={styles.spec__box}>
          <h2 className="section__title">Speciality coffes that make you happy and cheer you up!</h2>

          <div>
            <Button href="#" clsName="spec__button">
              See more
            </Button>
          </div>
        </div>

        <div className={styles.spec__category}>
          <div className={`${styles.spec__group} ${styles.spec__line}`}>
            <Image src="assets/img/specialty1.png" alt="" className={styles.spec__img} />

            <h3 className={styles.spec__title}>Selected Coffee</h3>
            <p className="spec__description">
              We select the best premium coffee, for a true taste.
            </p>
          </div>

          <div className={`${styles.spec__group} ${styles.spec__line}`}>
            <Image src="assets/img/specialty2.png" alt="" className={styles.spec__img} />

            <h3 className={styles.spec__title}>Delicious Cookies</h3>
            <p className="spec__description">
              Enjoy your coffee with some hot cookies
            </p>
          </div>

          <div className={`${styles.spec__group}`}>
            <Image src="assets/img/specialty3.png" alt="" className={styles.spec__img} />

            <h3 className={styles.spec__title}>Enjoy at Home</h3>
            <p className="spec__description">Enjoy the best coffee in the comfort of your home.</p>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Speciality;