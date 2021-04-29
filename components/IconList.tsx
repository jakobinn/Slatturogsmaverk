import IconText from './iconText'

const IconList = () => {
  return (
    <div>
      <div className="iconList">
        <IconText icon={'fas fa-seedling'} text={'Traust'} />
       
        <IconText icon={'fas fa-dollar-sign'} text={'Hagstætt verð'} />
        <IconText icon={'fas fa-shipping-fast'} text={'Fagmennska'} />
        <IconText icon={'fas fa-globe'} text={'Reynsla'} />
      </div>
    </div>
  )
}

export default IconList
