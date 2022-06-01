import styles from '@/styles/components/Speciality.module.scss';
import { Button } from '@/components/Button';
import Image from 'next/image';

function Speciality() {
  return (
    <section className={`${styles.spec} section container`} id="speciality">
      <div className={styles.spec__container}>
        <div className={styles.spec__box}>
          <h2 className="section__title">Cafés especiais que te fazem feliz e te animam!</h2>

          <div>
            <Button href="#" clsName="spec__button">
              Ver mais
            </Button>
          </div>
        </div>

        <div className={styles.spec__category}>
          <div className={`${styles.spec__group} ${styles.spec__line}`}>
            <Image src="assets/img/specialty1.png" alt="" className={styles.spec__img} />

            <h3 className={styles.spec__title}>Cafés selecionados</h3>
            <p className="spec__description">
              Selecionamos o melhor café premium, para um verdadeiro sabor.
            </p>
          </div>

          <div className={`${styles.spec__group} ${styles.spec__line}`}>
            <Image src="assets/img/specialty2.png" alt="" className={styles.spec__img} />

            <h3 className={styles.spec__title}>Biscoitos deliciosos</h3>
            <p className="spec__description">
              Aproveite seu café com alguns biscoitos quentes
            </p>
          </div>

          <div className={`${styles.spec__group}`}>
            <Image src="assets/img/specialty3.png" alt="" className={styles.spec__img} />

            <h3 className={styles.spec__title}>Aproveite em casa</h3>
            <p className="spec__description">Desfrute do melhor café no conforto da sua casa.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Speciality;