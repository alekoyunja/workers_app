
const Card = (props) => {
  return (
    <div className={`bg-white p-5 rounded-2xl ${props.className}`}>{props.children}</div>
  )
}

export default Card