import FooterTextWithIcon from './footerTextWithIcon'

const footer = () => {
  var bb = ''
  return (
    <div>
      <div id="footer" className="footer__gray-background">
        <div className="footer__container">
          <div className="footer__left-column">
            <p className="footer__text-line main">Um Sláttur og smáverk ehf</p>
            <p className="footer__text-line">
              Sláttur og smáverk er fyrirtæki sem er þekkt fyrir að veita
              frábæra þjónustu á sanngjörnu verði. Það er stofnað af tveimur
              vinum með mikla reynslu af garðyrkjustörfum.
            </p>
          </div>
          <div className="footer__center-column">
            <p className="footer__text-line main">Upplýsingar</p>
            <FooterTextWithIcon
              text={'Háaleitisbraut 44, Reykjavík'}
              icon={'fas fa-map-marked-alt'}
            />
            <FooterTextWithIcon text={'661-4916'} icon={'fas fa-phone'} />
            <FooterTextWithIcon
              text={'slattur@slatturogsmaverk.is'}
              icon={'fas fa-envelope'}
            />
            <p className="footer__text-line"></p>
            <p className="footer__text-line"></p>
          </div>
          <div className="footer__right-column">
            <p className="footer__text-line main">Fylgstu með</p>
            <p className="footer__text-line">Við erum á samfélagsmiðlunum</p>
            <div className="footer__icon-container">
              <a
                className="footer__icon-link"
                href="https://www.facebook.com/slatturogsmaverk.is"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <span className="fab fa-facebook footer__icon fb"></span>
              </a>
              <a
                className="footer__icon-link"
                aria-label="Instagram"
                href="https://www.instagram.com/slatturogsmaverk/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="fab fa-instagram footer__icon insta"></span>
              </a>
            </div>

            {/* <div className="footer__right-column-container">
              <label>Skrá mig á tölvupóstlista</label>
              <input placeholder="Netfang" className="footer__contact-input" />
              <a className="footer__contact-btn" href="#">
                Staðfesta
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
