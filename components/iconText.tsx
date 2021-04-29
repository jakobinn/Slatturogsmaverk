interface IconTextProps {
  icon: string
  text: string
}

export default ({ icon, text }: IconTextProps) => {
  return (
    <div>
      <div className="iconList__container">
        <span className={icon + ' iconList__logo'}></span>
        <span className="iconList__text">{text}</span>
      </div>
    </div>
  )
}
