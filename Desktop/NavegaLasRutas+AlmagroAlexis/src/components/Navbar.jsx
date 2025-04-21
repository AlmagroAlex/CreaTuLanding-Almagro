import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Todos</Link> | 
      <Link to="/category/ropa">Ropa</Link> | 
      <Link to="/category/calzado">Calzado</Link> | 
      <Link to="/category/accesorios">Accesorios</Link>
    </nav>
  )
}

export default Navbar