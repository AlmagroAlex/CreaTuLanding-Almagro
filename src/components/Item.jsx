import { Link } from 'react-router-dom'

const Item = ({ id, title, price }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Precio: ${price}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  )
}

export default Item
