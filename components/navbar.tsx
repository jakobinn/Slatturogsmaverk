import Image from 'next/image'
import $ from 'jquery'

const NavBar = ({
  onMenuLinkClick,
  homeRef,
  productsRef,
  reviewsRef,
  infoRef,
  setIsOpen,
  isOpen,
  showContact,
}) => {
  const triggerNavBar = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      $('.navbar__mobile-container').slideUp(500)
    } else {
      $('.navbar__mobile-container').slideDown(500)
    }
  }

  return (
    <div>
      <div className="navbar__wrapper">
        <div data-aos-duration="800" data-aos="slide-down" className="navbar">
          <div className="navbar__left">
            <div className="navbar__logo-container">
              <Image
                className={'logo__image'}
                src={'/slatt.jpg'}
                alt={'company logo'}
                height={50}
                width={50}
              />

              <p className="navbar__logo">
                Sláttur &<span className="navbar__logo-smaller"> smáverk</span>
              </p>
            </div>
            <nav>
              <ul className="navbar__links">
                <li>
                  <a onClick={() => onMenuLinkClick('home', homeRef)}>Heim</a>
                </li>
                <li>
                  <a onClick={() => onMenuLinkClick('products', productsRef)}>
                    Þjónustur
                  </a>
                </li>
                <li>
                  <a onClick={() => onMenuLinkClick('reviews', reviewsRef)}>
                    Umsagnir
                  </a>
                </li>
                <li>
                  <a onClick={() => onMenuLinkClick('info', infoRef)}>
                    Upplýsingar
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {!showContact ? (
            <a
              onClick={() => onMenuLinkClick('contact', null)}
              className="navbar__contact-btn"
            >
              Hafa samband
            </a>
          ) : (
            <a
              onClick={() => onMenuLinkClick('contact', null)}
              className="navbar__contact-btn fas fa-times"
            ></a>
          )}
          <div
            onClick={() => triggerNavBar()}
            className={
              isOpen ? 'mobile__navbar-burger change' : 'mobile__navbar-burger'
            }
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </div>
      <nav className={'navbar__mobile-container'}>
        <ul className="navbar__mobile-links">
          <li>
            <a onClick={() => onMenuLinkClick('home', homeRef)}>Heim</a>
          </li>
          <li>
            <a onClick={() => onMenuLinkClick('products', productsRef)}>
              Þjónustur
            </a>
          </li>
          <li>
            <a onClick={() => onMenuLinkClick('reviews', reviewsRef)}>
              Umsagnir
            </a>
          </li>
          <li>
            <a onClick={() => onMenuLinkClick('info', infoRef)}>Upplýsingar</a>
          </li>
          <li>
            {!showContact ? (
              <a onClick={() => onMenuLinkClick('contact', null)}>
                Hafa samband
              </a>
            ) : (
              <a onClick={() => onMenuLinkClick('contact', null)}>
                Aftur á forsíðu
              </a>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
