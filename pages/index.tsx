import React, { MutableRefObject } from 'react'
//components
import IconList from '../components/IconList'
import MessengerChat from 'react-messenger-customer-chat'
import Header from '../components/header'
import Products from '../components/products'
import Quote from '../components/quote'
import Customers from '../components/customers'
import Footer from '../components/footer'
import DocumentHead from '../components/documentHead'
import NavBar from '../components/navbar'
import AlertMain from 'react-popup-alert'

//other imports
import AOS from 'aos'
import 'aos/dist/aos.css'

//env
const FB_PAGE_ID = process.env.NEXT_PUBLIC_FB_PAGE_ID
const FB_APP_ID = process.env.NEXT_PUBLIC_FB_APP_ID

export const Home = (): JSX.Element => {
  //Refs
  const homeRef = React.useRef<HTMLInputElement>(null)
  const productsRef = React.useRef<HTMLInputElement>(null)
  const reviewsRef = React.useRef<HTMLInputElement>(null)
  const infoRef = React.useRef<HTMLInputElement>(null)

  const [isNavBarOpen, setIsNavBarOpen] = React.useState(false)
  const [showContact, setShowContact] = React.useState(false)
  const [isAlertShown, showAlert] = React.useState(false)
  const [alertText, setAlertText] = React.useState('')
  const [alertType, setAlertType] = React.useState('')

  React.useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  function setShowContactMain() {
    setShowContact(!showContact)
  }

  const onMenuLinkClick = (
    link: string,
    ref: MutableRefObject<HTMLInputElement>
  ) => {
    if (link === 'contact') {
      setShowContact(!showContact)
    } else if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  function triggerAlert(text, type) {
    setAlertText(text)
    setAlertType(type)
    showAlert(true)
  }

  function hideAlert() {
    setAlertText('')
    setAlertType('')
    showAlert(false)
  }

  return (
    <div className="container">
      {/* <html lang="is" /> */}
      <DocumentHead />
      <header>
        <NavBar
          onMenuLinkClick={onMenuLinkClick}
          setIsOpen={setIsNavBarOpen}
          isOpen={isNavBarOpen}
          homeRef={homeRef}
          productsRef={productsRef}
          reviewsRef={reviewsRef}
          infoRef={infoRef}
          showContact={showContact}
        />
        <div ref={homeRef}>
          <Header
            setShowContact={setShowContactMain}
            showContact={showContact}
            onShowAlertPress={triggerAlert}
          />
        </div>
      </header>
      <main>
        <IconList />
        <Quote />
        <div data-aos="fade-up" data-aos-duration="1000" ref={productsRef}>
          <Products />
        </div>
        <div data-aos-duration="1000" ref={reviewsRef}>
          <Customers />
        </div>
      </main>
      <footer data-aos="fade-up" data-aos-duration="1000" ref={infoRef}>
        <Footer />
      </footer>
      <AlertMain
        pressCloseOnOutsideClick={true}
        header={'Athugið'}
        text={alertText}
        btnText={'Loka'}
        showBorderBottom={true}
        type={alertType}
        show={isAlertShown}
        onClosePress={hideAlert}
      />
      <MessengerChat
        shouldShowDialog={true}
        themeColor={'#4ab74a'}
        // greetingDialogDelay={4000}
        // language={'is'}
        loggedInGreeting={'Hæhæ, hvernig getum við aðstoðað? :)'}
        pageId={FB_PAGE_ID}
        appId={FB_APP_ID}
      />
    </div>
  )
}

export default Home
