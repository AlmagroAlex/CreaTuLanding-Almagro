const products = [
  { id: '1', title: 'Remera', category: 'ropa', description: 'Remera 100% algodón', price: 2500 },
  { id: '2', title: 'Zapatillas', category: 'calzado', description: 'Zapatillas deportivas', price: 9500 },
  { id: '3', title: 'Gorra', category: 'accesorios', description: 'Gorra estilo urbano', price: 1200 },
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 1000)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find(p => p.id === id)), 1000)
  })
}

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.filter(p => p.category === category)), 1000)
  })
}