import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Books = () => {
    const [books,setBooks] = useState([])

    useEffect( () => {
        const fetch = async () => {
            try {
                const res = await axios.get('https://mongo-books.onrender.com/books')
                setBooks(res.data) 
            } catch (error) {
                console.log(error)
            }
        }
        fetch()
    },[])

    const handleDelete = async (id) => {
        try {
            await axios.delete('https://mongo-books.onrender.com/books/' + id)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <h1>Book Shop</h1>
        <div className='books'>
            {books.map(book => (
                <div className='book' key={book._id}>
                    {book.cover && <div className='divImg'><img src={book.cover} alt=''/></div>}
                    <h2>{book.title}</h2>
                    <p>{book.desc}</p>
                    <span>{book.price}</span>
                    <button className='delete' onClick={() => handleDelete(book._id)} >Delete</button>
                    <button className='update'><Link to={`/update/${book._id}`}>Update</Link></button>
                </div>
            ))}
        </div>
        <button className='homeButton'><Link to='/add'>Add new book</Link></button>
    </div>
  )
}

export default Books