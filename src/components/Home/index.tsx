import styles from '@/styles/components/Home.module.scss';
import Image from 'next/image';

function Home() {
  return (
    <section className={`${styles.home} grid`} id="home">
      <div className={styles.home__container}>
        <div className={`${styles.home__content} container`}>
          <h1 className={styles.home__title}>
            Escolha seu café favorito e aproveite<span>.</span>
          </h1>
          <p className={styles.home__description}>
            Compre os melhores e deliciosos cafés.
          </p>

          <div className={styles.home__data}>
            <div className="home__data-group">
              <h2 className={styles.home__dataNumber}>120K</h2>
              <h3 className={styles.home__dataTitle}>Depoimentos</h3>
              <p className="home__data-description">
                Depoimentos de vários clientes que confiam em nós.
              </p>
            </div>

            <div className="home__data-group">
              <h2 className={styles.home__dataNumber}>340+</h2>
              <h3 className={styles.home__dataTitle}>Produtos Exclusivos</h3>
              <p className="home__data-description">
                Preparação premium com ingredientes de qualidade.
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