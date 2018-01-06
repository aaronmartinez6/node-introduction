let books = [];
let id = 0;

module.exports = {
    create: ((request, response) => {
        // console.log(request.body)
        const { title, author } = request.body;
        books.push({ id, title, author })
        id++
        response.status(200).send(books)
    }),
    read: ((request, response) => {
        response.status(200).send(books)
    }),
    update: ((request, response) => {
        const updateID = req.params.id;
        let indexOfBook = books.findIndex(book => book.id == updateID)
        books[indexOfBook] = {
            id: books[indexOfBook].id || req.params.id,
            title: req.body.title || books[indexOfBook].title,
            author: req.body.author || books[indexOfBook].author
        }
        response.status(200).send(books)
    }),
    delete: {}
}