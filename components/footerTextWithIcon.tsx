const FooterTextWithIcon = ({ icon, text }) => {
  return (
    <div className="footer__text-line">
      <i className={icon + ' footer__icon-small'}></i>
      <p className="footer__text-line">{text}</p>
    </div>
  )
}

export default FooterTextWithIcon
