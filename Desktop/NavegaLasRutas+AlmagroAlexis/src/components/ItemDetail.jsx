import ItemCount from './ItemCount'

const ItemDetail = ({ title, description, price }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <ItemCount />
    </div>
  )
}

export default ItemDetail