import styles from '@/styles/components/Home.module.scss';
import Image from 'next/image';

function Home() {
  return (
    <section className={`${styles.home} grid`} id="home">
      <div className={styles.home__container}>
        <div className={`${styles.home__content} container`}>
          <h1 className={styles.home__title}>
            Chosse Your Favorite Coffe And Enjoy<span>.</span>
          </h1>
          <p className={styles.home__description}>
            Buy the best and delicious coffes.
          </p>

          <div className={styles.home__data}>
            <div className="home__data-group">
              <h2 className={styles.home__dataNumber}>120K</h2>
              <h3 className={styles.home__dataTitle}>Testimonials</h3>
              <p className="home__data-description">
                Testimonials from various customers who trust us.
              </p>
            </div>

            <div className="home__data-group">
              <h2 className={styles.home__dataNumber}>340+</h2>
              <h3 className={styles.home__dataTitle}>Exclusive Product</h3>
              <p className="home__data-description">
                Premium preparation with quality ingredients.
              </p>
            </div>
          </div>

          <a href="#speciality">
            <Image src="assets/img/scroll.png" alt="" className={styles.home__scroll} />
          </a>
        </div>
      </div>

      <Image src="assets/img/home.png" alt="" className="home__img" />
    </section>
  )
}

export default Home;