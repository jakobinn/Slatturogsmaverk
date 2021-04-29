interface ProductBoxProps {
  title: string
  text: string
  image: string
}

export default ({ title, text, image }: ProductBoxProps) => {
  return (
    <div>
      <article
        data-aos="zoom-in"
        data-aos-duration="300"
        className="product__box"
        style={{ backgroundImage: 'url(' + image + ')' }}
      >
        <div className="product__box-text-container">
          <h4 className="product__box-title">{title}</h4>
          <p className="product__box-text">{text}</p>
        </div>
      </article>
    </div>
  )
}
