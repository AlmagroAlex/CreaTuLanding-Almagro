import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../data/products'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const { itemId } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    getProductById(itemId).then(setItem)
  }, [itemId])

  return (
    <div>
      {item ? <ItemDetail {...item} /> : <p>Cargando...</p>}
    </div>
  )
}

export default ItemDetailContainer