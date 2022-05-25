import styles from '@/styles/components/Quality.module.scss';
import { Button } from '../Button';
import { BiRightArrowAlt } from 'react-icons/bi';

function Quality() {
  return (
    <section id="premium" className={`${styles.quality} section`}>
      <div className={`${styles.quality__container} container`}>
        <h2 className="section__title">We offer a premium and bette rquality preparation just for you!</h2>

        <div className={`${styles.quality__content} grid`}>
          <div className={styles.quality__images}>
            <img src="assets/img/quality1.png" alt="" className={styles.quality__imgBig} />
            <img src="assets/img/quality2.png" alt="" className={styles.quality__imgSmall} />
          </div>

          <div className={styles.quality__data}>
            <h1 className={styles.quality__title}>Premium Coffee</h1>
            <h2 className={styles.quality__price}>R$ 94.99</h2>
            <span className={styles.quality__special}>Especial Price</span>
            <p className={styles.quality__description}>
              We are delighted with our coffee. That's why you get the best
              premium coffee plus the kettle made of ressitant materials
              you see in the image, for a special price.
            </p>

            <div className={styles.quality__buttons}>
              <Button>
                Buy now
              </Button>

              <a href="#" className={styles.quality__button}>
                See more
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