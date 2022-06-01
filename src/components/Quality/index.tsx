import styles from '@/styles/components/Quality.module.scss';
import { Button } from '../Button';
import { BiRightArrowAlt } from 'react-icons/bi';
import Image from 'next/image';

function Quality() {
  return (
    <section id="premium" className={`${styles.quality} section`}>
      <div className={`${styles.quality__container} container`}>
        <h2 className="section__title">Oferecemos uma preparação premium e de melhor qualidade só para você!</h2>

        <div className={`${styles.quality__content} grid`}>
          <div className={styles.quality__images}>
            <Image src="assets/img/quality1.png" alt="" className={styles.quality__imgBig} />
            <Image src="assets/img/quality2.png" alt="" className={styles.quality__imgSmall} />
          </div>

          <div className={styles.quality__data}>
            <h1 className={styles.quality__title}>Café Premium</h1>
            <h2 className={styles.quality__price}>R$ 94.99</h2>
            <span className={styles.quality__special}>Preço especial</span>
            <p className={styles.quality__description}>
              Estamos encantados com o nosso café. É por isso que você recebe o melhor café premium mais a chaleira feita de materiais resistentes que você vê na imagem, por um preço especial.
            </p>

            <div className={styles.quality__buttons}>
              <Button>
                Compre Agora
              </Button>

              <a href="#" className={styles.quality__button}>
                Ver mais
                <BiRightArrowAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Quality }