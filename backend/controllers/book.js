import Books from '../model/books.js'

export const getBooks =  async ( req, res ) => {
    const data = await Books.find()
    res.json(data)
}

export const addBook = async ( req, res ) => {
    try {
        const newBook = new Books({
            title: req.body.title,
            desc: req.body.desc,
            cover: req.body.cover,
            price: req.body.price
        })
    
         const response = await newBook.save()
        res.json(response)
        
    } catch (error) {
        console.log(error)
    }
}

export const updateBook = async ( req, res ) => {
    const bookId = req.params.id

    const update = {
        title: req.body.title,
        desc: req.body.desc,
        cover: req.body.cover,
        price: req.body.price
    }

    try {
        await Books.findOneAndUpdate({_id: bookId}, update)
        res.json({message: 'Book update'})
    } catch (error) {
        res.json({message: 'mistake'})
    }
}

export const deleteBook = async ( req, res ) => {
    const bookId = req.params.id
    try {
        await Books.deleteOne({_id: bookId})
        res.json({message: 'Book delete'})
    } catch (error) {
        res.json({message: 'mistake'})
    }
}