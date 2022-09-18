import './card.css'


const CardContainer = ({ books, deleteBook }) => {

    const markAsRead = (e) => {
        if (e.target.innerText === 'Mark as Read') {
            e.target.innerText = 'Mark as Unread'
        } else {
            e.target.innerText = 'Mark as Read'
        }
    }


    return (
        <div className='container'>
            {
                books.map(book => {
                    return (
                        <div key={book.id} className='card'>
                            <h2 className='book-name'>{book.title}</h2>
                            <p><span className='pages'>{book.pages}</span> Pages</p>
                            <p><span className='auhtor'>{book.author}</span></p>
                            <div className='buttons'>
                                <button onClick={markAsRead} className='read'>Mark as Read</button>
                                <button onClick={() => deleteBook(book.id)}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardContainer