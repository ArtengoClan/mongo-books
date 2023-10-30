import mongoose from 'mongoose'

const booksSchema = mongoose.Schema({
    title: {
        type: String
    },
    desc: {
        type: String
    },
    cover: {
        type: String
    },
    price: {
        type: Number
    }
},{timestamps: true})

export default mongoose.model('books', booksSchema)