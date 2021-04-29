const mainInput = ({
  value,
  setValue,
  placeholder,
  isNumberOnly,
  id,
}: {
  value: string
  setValue: Function
  placeholder: string
  isNumberOnly?: boolean
  id: string
}) => {
  return (
    <div>
      <label htmlFor={id} className="hidden">
        {id}
      </label>
      <input
        value={value}
        id={id}
        type={isNumberOnly ? 'number' : 'text'}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="contact__input"
      />
    </div>
  )
}

export default mainInput
