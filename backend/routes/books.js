import express from 'express'
import { getBooks, addBook, deleteBook, updateBook } from '../controllers/book.js'

const router = express.Router()

router.route('/books').get(getBooks).post(addBook)
router.route('/books/:id').put(updateBook).delete(deleteBook)

export default router