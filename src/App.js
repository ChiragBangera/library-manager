import Navbar from './component/nav/navbar';
import './component/nav/navbar.style.css'
import { Routes,Route} from 'react-router-dom';
import AddBook from './component/addbook';
import Home from './component/home';



const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addbook' element={<AddBook/>}/>
      </Routes>
    </div>
  )
}

export default App;
