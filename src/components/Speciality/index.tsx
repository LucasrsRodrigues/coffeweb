import styles from '@/styles/components/Speciality.module.scss';

function Speciality() {
  return (
    <section className={`${styles.spec} section container`}>
      <div className="spec__container">
        <div className="spec__box">
          <h2 className="section__title">Speciality coffes that make you happy and cheer you up!</h2>

          <div>
            <a href="#" className="button spec__button">
              See more
            </a>
          </div>
        </div>

        <div className="spec__category">
          <div className="spec__group">
            <img src="assets/img/specialty1.png" alt="" className="spec__img" />

            <h3 className="spec__title"></h3>
            <p className="spec__description"></p>
          </div>

          <div className="spec__group">
            <img src="assets/img/specialty2.png" alt="" className="spec__img" />

            <h3 className="spec__title"></h3>
            <p className="spec__description"></p>
          </div>

          <div className="spec__group">
            <img src="assets/img/specialty3.png" alt="" className="spec__img" />

            <h3 className="spec__title"></h3>
            <p className="spec__description"></p>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Speciality;