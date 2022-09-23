import '../nav/navbar.style.css'
import '../card-container/card.css'
import { Link,useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()

    return (
        <nav className='navigation-bar'>
            <Link to='/'><h1 className='title'>Library Manager</h1></Link>
            <ul>
                {location.pathname === '/' && <Link to='/addbook'><button className="add-book">Add Book</button></Link>}
            </ul>
        </nav>
    )
}








export default Navbar
