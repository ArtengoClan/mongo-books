import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {

  const [book,setBook] = useState({
    title:'',
    desc:'',
    price:null,
    cover:''
  })

  const navigate = useNavigate()
  const location = useLocation()

  const bookId = location.pathname.split('/')[2]

  const handleChange = (e) => {
    setBook((prev)=>({...prev, [e.target.name]:e.target.value}))
  }

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.put('https://mongo-books.onrender.com/books/' + bookId, book)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='form'>
      <h1>Update the book</h1>
      <input onChange={handleChange} type='text' name='title' placeholder='title' />
      <input onChange={handleChange} type='text' name='desc' placeholder='desc' />
      <input onChange={handleChange} type='number' name='price' placeholder='price' />
      <input onChange={handleChange} type='text' name='cover' placeholder='copy url picture' />
      <button className='formButton'  onClick={handleClick}>Updates</button>
    </div>
  )
}

export default Update