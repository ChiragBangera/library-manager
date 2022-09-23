import CardContainer from "./card-container/card-cont.component";
import { useState, useEffect } from "react";
import { data } from '../db.js'



const Home = () => {
    const [books, setBooks] = useState(data)

    const deleteBook = (id) => {
        const newbooks = books.filter(book => book.id !== id)
        setBooks(newbooks)
    }



    return (
        <CardContainer books={books} deleteBook={deleteBook} />
    );
}

export default Home;