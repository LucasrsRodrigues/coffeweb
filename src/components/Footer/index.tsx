import styles from '@/styles/components/Footer.module.scss';
import Image from 'next/image';
import { BiFace, BiRightArrowAlt } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { ScrollUp } from '../ScrollUp';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container`}>
        <h1 className={`${styles.footer__title}`}>Coffe.</h1>

        <div className={`${styles.footer__content} grid`}>
          <div className="footer__data">
            <p className={styles.footer__description}>
              Subscribe to our newsletter
            </p>

            <div className={styles.footer__newsletter}>
              <input type="email" name="email" id="email" placeholder='Your email address' className={styles.footer__input} />
              <button className={styles.footer__button}>
                <BiRightArrowAlt />
              </button>
            </div>
          </div>

          <div className="footer__data">
            <h2 className={styles.footer__subtitle}>Address</h2>
            <p className="footer__information">
              9876 Hacienda Av. <br />
              Lima, La Libertad 123, Perú
            </p>
            <Image src="assets/img/footerflag.png" alt="" className={styles.footer__flag} />
          </div>

          <div className="footer__data">
            <h2 className={styles.footer__subtitle}>Contact</h2>
            <p className="footer__information">
              +987654321 <br />
              coffee@email.com
            </p>
          </div>

          <div className="footer__data">
            <h2 className={styles.footer__subtitle}>Office</h2>
            <p className="footer__information">
              Monday - Saturday <br />
              9AM - 10PM
            </p>
          </div>
        </div>

        <div className={styles.footer__group}>
          <ul className={styles.footer__social}>
            <a href="https://www.facebook.com/" target="_blank" className={styles.footer__socialLink} rel="noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/" target="_blank" className={styles.footer__socialLink} rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="https://www.twitter.com/" target="_blank" className={styles.footer__socialLink} rel="noreferrer">
              <FaTwitter />
            </a>
          </ul>

          <span className={styles.footer__copy}>
            &#169; lucasrs. All rights reserved
          </span>
        </div>
        <ScrollUp />
      </div>
    </footer>
  )
}


export { Footer };