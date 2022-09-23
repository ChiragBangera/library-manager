import { data } from "../db";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddBook = () => {
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [pages,setPages] = useState('')
    const history = useNavigate()

    const handleSubmit= (e)=>{
        e.preventDefault()
        const nextId = data.length + 1
        const newdata = {title, "author": author, "pages":pages, "id":nextId}
        data.push(newdata)
        history('/')
    }


    return ( 
        <div className="addbook">
            <form onSubmit={handleSubmit}>
                <label>Book Title</label>
                <input required onChange={(e)=>setTitle(e.target.value)} value={title} type="text"/>
                <label>Pages</label>
                <input required onChange={(e)=>setPages(e.target.value)} value={pages} type="number"/>
                <label>Author</label>
                <input required onChange={(e)=>setAuthor(e.target.value)} value={author} type="text"/>
                <button>Add Book</button>
            </form>
        </div>
     );
}
 
export default AddBook