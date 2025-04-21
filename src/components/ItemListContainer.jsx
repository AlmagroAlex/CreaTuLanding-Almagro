import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../data/products'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const fetchData = categoryId ? getProductsByCategory(categoryId) : getProducts()
    fetchData.then(setItems)
  }, [categoryId])

  return (
    <div>
      <h1>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h1>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer
