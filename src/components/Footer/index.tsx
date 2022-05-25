import styles from '@/styles/components/Footer.module.scss';
import { BiFace, BiRightArrowAlt } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footer__contianer container">
        <h1 className="footer__title">Coffe.</h1>

        <div className="footer__content grid">
          <div className="footer__data">
            <p className="footer__description">
              Subscribe to our newsletter
            </p>

            <div className="footer__newsletter">
              <input type="email" name="email" id="email" placeholder='Your email address' className="footer__input" />
              <button className="footer__buttoon">
                <BiRightArrowAlt />
              </button>
            </div>
          </div>

          <div className="footer__data">
            <h2 className="footer__subtitle">Address</h2>
            <p className="footer__information">
              9876 Hacienda Av. <br />
              Lima, La Libertad 123, Perú
            </p>
            <img src="assets/img/footerflag.png" alt="" className="footer__flag" />
          </div>

          <div className="footer__data">
            <h2 className="footer__subtitle">Contact</h2>
            <p className="footer__information">
              +987654321 <br />
              coffee@email.com
            </p>
          </div>

          <div className="footer__data">
            <h2 className="footer__subtitle">Office</h2>
            <p className="footer__information">
              Monday - Saturday <br />
              9AM - 10PM
            </p>
          </div>
        </div>

        <div className="footer__group">
          <ul className="footer__social">
            <a href="https://www.facebook.com/" target="_blank" className="footer__socialLink">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/" target="_blank" className="footer__socialLink">
              <FaInstagram />
            </a>

            <a href="https://www.twitter.com/" target="_blank" className="footer__socialLink">
              <FaTwitter />
            </a>
          </ul>

          <span className="footer__copy">
            &#169; lucasrs. All rights reserved
          </span>
        </div>

      </div>
    </footer>
  )
}


export { Footer };