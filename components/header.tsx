import ContactBox from './contactBox'

const header = ({ showContact, setShowContact, onShowAlertPress }: any) => {
  return (
    <div data-aos-duration="400" data-aos="fade-bottom">
      <div
        className={
          !showContact ? 'header__image plant' : 'header__image contact'
        }
      >
        <div className="header__content">
          <div
            data-aos-duration="1000"
            data-aos="fade-right"
            className="header__text-box"
          >
            <h1 className="header__title">
              {' '}
              {!showContact ? 'Sláttur &' : 'Hafðu'}
            </h1>
            <h2 className="header__title-lower">
              {' '}
              {!showContact ? 'smáverk' : 'samband'}{' '}
            </h2>
            <p className="header__text">
              {!showContact
                ? 'Láttu fagmenn sjá um garðinn fyrir sanngjarnt verð.'
                : 'Við rífum bara arfa, ekki kjaft.'}
            </p>
          </div>

          <div>
            {showContact ? <div className={'right-white-contact'}></div> : null}
            <div className={'right-white-contact'}></div>
            <div
              data-aos-duration={'1000'}
              data-aos-offset={'-2000'}
              data-aos={'fade-left'}
            >
              <ContactBox
                onShowAlertPress={onShowAlertPress}
                setShowContact={setShowContact}
                showContact={showContact}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default header
