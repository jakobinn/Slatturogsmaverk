import Review from './review'
import Title from './title'

const customers = () => {
  return (
    <div>
      <div id="reviews" style={{ overflowX: 'hidden' }}>
        <div style={{ marginTop: 50, marginBottom: 50 }}>
          <Title title={'Umsagnir'} />
        </div>
        <div className="customer__container">
          <section
            className="customer__left-container"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p className="section__header customer__header">Margrét Lilja</p>
            <p className="customer__header-lower">Viðskiptavinur</p>
            <p className="customer__text">
              Við á mínu heimili erum í áskrift hjá Sláttur og smáverk til að
              sjá um garðin. Þetta er mikið fagfólk sem kemur reglulega og sér
              til þess að garðurinn er fallegur. Ég hafði samband við þá þar sem
              vinnan þeirra er á mjög sanngjörnu verði en eftir að hafa verið
              lengi í áskrift hjá þeim, hef ég séð hve vönduð vinnubrögðin
              þeirra eru.
            </p>

            <p className="customer__text">
              Ég mæli hiklaust með Sláttur og smáverk.
            </p>
          </section>
          <div className="customer__image-container">
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              className="customer__image"
              alt="image of a customer"
              src="/images/woman-big.jpg"
            />
          </div>
        </div>
        <div
          data-aos="fade"
          data-aos-duration="1000"
          className="customer__star-container"
        >
          {/* <Review name={'Húsfélagið Lág'} text="Frábær þjónusta" />
          <Review name={'Rambo ehf'} text="Fagleg vinnubrögð" />
          <Review name={'Jóhannes hjá Kalo'} text="Mæli með þeim" /> */}
        </div>
      </div>
    </div>
  )
}

export default customers
