
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

const books = [
    {
        id: '1',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Novel'
    },
    {
        id: '2',
        title: 'The Great Gatsby',
        author: 'Harper Lee',
        year: 1960,
        genre: 'South Gothic'
    }
]


// Define the schema using GraphQL schema language
const schema = buildSchema(`
  # A book has a title, author, and publication year
  type Book {
    id: ID!
    title: String!
    author: String!
    year: Int
    genre: String
  }

  # The "Query" type is the root of all GraphQL queries
  type Query {
    # Get all books
    books: [Book!]!
    # Get a specific book by ID
    book(id: ID!): Book
    # Search books by title or author
    searchBooks(query: String!): [Book!]!
  }`
);

// Define resolvers for the schema fields
const root = {
    // Resolver for fetching all books
    books: () => books,
    book: ({id}) => books.find(book => book.id === id),

    // Resolver for searching books
    searchBooks: ({query}) => {
        const searchTerm = query.toLowerCase();
        return books.filter(
            books => book.title.toLowerCase().include(searchTerm) ||
            books.author.toLowerCase(). includes(searchTerm)
        )
    }
}

const app = express()

// set up the GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    // Enable the GraphiQL interface for testing
    graphiql: true,
}))

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log('Server is running...on graphql server on port: ' + PORT)
})


