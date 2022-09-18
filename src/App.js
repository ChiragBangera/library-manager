import Navbar from './component/nav/navbar';
import './component/nav/navbar.style.css'
import CardContainer from './component/card-container/card-cont.component';
import { useState } from 'react';





const App = () => {
  const [books, setBooks] = useState([
    {
      title: 'Ice and Fire',
      author: 'George RR Martin',
      pages: 400,
      id:1
    },
    {
      title: '2 States ice and fire all the same',
      author: 'Chetan Bhagat',
      pages: 450,
      id:2
    },
    {
      title: '3 States',
      author: 'Chetan Bhagat',
      pages: 450,
      id:3
    },
    {
      title: '4 States',
      author: 'Chetan Bhagat',
      pages: 450,
      id:4
    },
    {
      title: '5 States',
      author: 'Chetan Bhagat',
      pages: 450,
      id:5
    },
    {
      title: '6 States',
      author: 'Chetan Bhagat',
      pages: 450,
      id:6
    },
    {
      title: '7 States',
      author: 'Chetan Bhagat',
      pages: 450,
      id:7
    }
  ])

  const deleteBook = (id)=>{
    const newbooks = books.filter(book=>book.id!==id)
    setBooks(newbooks)
  }


  return (
    <div>
      <Navbar />
      <CardContainer books={books} deleteBook={deleteBook}/>
    </div>
  )
}

export default App;
