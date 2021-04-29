import ProductBox from './productBox'
import Title from './title'

const products = () => {
  return (
    <div>
      <div className="products__gray-background">
        <Title title={'Þjónustur'} />
        <div className="products">
          <ProductBox
            title={'Garðsláttur'}
            text={
              'Við bjóðum upp á garðslátt bæði stakan eða í áskrift. Í áskrift er greitt fast verð fyrir sláttinn og sláum við á tveggja til þriggja vikna fresti yfir sumarið frá því grasið sprettur í maí til lok ágúst. Við komum með okkar eigin vélar og hirðum allt gras.'
            }
            image={'/images/slatturvel.png'}
          />
          <ProductBox
            title={'Beðahreinsun'}
            text={
              'Við bjóðum upp á beðahreinsanir og fjarlægjum við arfa, lauf og rusl úr garðinum Í beðahreinsun þá er greitt fyrir tímakaup eða tilboð ef þess óskast. Einnig er hægt að fá beðahreinsun í áskrift þá hreinsum við beðin einu sinni í mánuði, það einfaldar verkið og garðurinn er flottur yfir allt sumarið.'
            }
            image={'/images/arfi.jpg'}
          />
          <ProductBox
            title={'Trjáklippingar'}
            text={
              'Við bjóðum upp á trjáklippingar. Hægt er að snyrta tré allan ársins hring en hversu mikið er klippt fer eftir árstíma.'
            }
            image={'/images/klipp.jpg'}
          />
          <ProductBox
            title={'Stubbatæting'}
            text={
              'Fjarlægjum trjástubba stóra sem smáa'
            }
            image={'/images/stubbataeting.jpg'}
          />
          <ProductBox
            title={'Hellulagnir'}
            text={
              'sérhæfum okkur í viðgerðum og minni hellulagningum'
            }
            image={'/images/hellur.jpg'}
          />
           <ProductBox
            title={'Tyrfing'}
            text={
              'Hægt er að tyrfa allan ársins hring meðan birgjar bjóða upp á torf.'
            }
            image={'/images/tyrfing.webp'}
          />
          <ProductBox
            title={'Smáverk'}
            text={
              'Tökum að okkur ýmisleg verk milli himins og jarðar, stundum meira að segja stórverk.'
            }
            image={'/images/smaverk.jpg'}
          />
        </div>
      </div>
    </div>
  )
}

export default products
