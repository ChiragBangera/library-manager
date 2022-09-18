import '../nav/navbar.style.css'

const Navbar = () => {
    return (
        <nav className='navigation-bar'>
            <h1 className='title'>Library Manager</h1>
            <ul>
                <li><button className="add-book">Add Book</button></li>
            </ul>
        </nav>
    )
}








export default Navbar
