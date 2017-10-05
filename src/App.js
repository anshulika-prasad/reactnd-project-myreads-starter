import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    allBooks: [],
    curReading: [],
    wantTRead:[],
    alreadyRead:[]
  }


	componentDidMount() {
		console.log("ANSHULIKA componentDidMaount")
		BooksAPI.getAll().then((allBooks) => {
			// for (var key in allBooks[0]) {
			// 	if (allBooks[0].hasOwnProperty(key)) {
			// 		console.log(key);
			// 	}
			// }
			// for (var key in allBooks[0].imageLinks) {
			// 	if (allBooks[0].imageLinks.hasOwnProperty(key)) {
			// 		console.log(key);
			// 	}
			// }
				
			// allBooks.map( (book) => 
			// 	console.log("ANSHULIKA componentDidMaount allBooks " + book.id + " title : " + book.title + " authors : " + book.authors + " shelf: " + book.shelf )
			// )


		  	this.setState({ allBooks })
		  	// this.setState({ curReading })
		  	// this.setState({ wantTRead })
		  	// this.setState({ alreadyRead })
		})
  	}

  render() {
  	let curReading = this.state.allBooks.filter(book => book.shelf === "currentlyReading")
	let wantTRead = this.state.allBooks.filter(book => book.shelf === "wantToRead")
	let alreadyRead = this.state.allBooks.filter(book => book.shelf === "read")

	console.log("ANSHULIKA currentlyReading books")
	curReading.map( (book) => 
		console.log("ANSHULIKA  currentlyReading " + book.id + " title : " + book.title + " imageLinks : " + book.imageLinks.thumbnail + " shelf: " + book.shelf )
	)

	console.log("ANSHULIKA wantToRead books")
	wantTRead.map( (book) => 
		console.log("ANSHULIKA  wantToRead " + book.id + " title : " + book.title + " imageLinks : " + book.imageLinks.thumbnail + " shelf: " + book.shelf )
	)

	console.log("ANSHULIKA alreadyRead books")
	alreadyRead.map( (book) => 
		console.log("ANSHULIKA  alreadyRead " + book.id + " title : " + book.title + " imageLinks : " + book.imageLinks.thumbnail + " shelf: " + book.shelf )
	)

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

						{curReading.map((book) => (
			             <li key={book.id}>
			                <div className="book">
			                  <div className="book-top">
			                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
			                    <div className="book-shelf-changer">
			                      <select>
			                        <option value="none" disabled>Move to...</option>
			                        <option value="currentlyReading">Currently Reading</option>
			                        <option value="wantToRead">Want to Read</option>
			                        <option value="read">Read</option>
			                        <option value="none">None</option>
			                      </select>
			                    </div>
			                  </div>
			                  <div className="book-title">{book.title}</div>
			                  <div className="book-authors">{book.authors}</div>
			                </div>
			              </li>
			          ))}

                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

                    {wantTRead.map((book) => (
			             <li key={book.id}>
			                <div className="book">
			                  <div className="book-top">
			                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
			                    <div className="book-shelf-changer">
			                      <select>
			                        <option value="none" disabled>Move to...</option>
			                        <option value="currentlyReading">Currently Reading</option>
			                        <option value="wantToRead">Want to Read</option>
			                        <option value="read">Read</option>
			                        <option value="none">None</option>
			                      </select>
			                    </div>
			                  </div>
			                  <div className="book-title">{book.title}</div>
			                  <div className="book-authors">{book.authors}</div>
			                </div>
			              </li>
			          ))}

                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

	                    {alreadyRead.map((book) => (
				             <li key={book.id}>
				                <div className="book">
				                  <div className="book-top">
				                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
				                    <div className="book-shelf-changer">
				                      <select>
				                        <option value="none" disabled>Move to...</option>
				                        <option value="currentlyReading">Currently Reading</option>
				                        <option value="wantToRead">Want to Read</option>
				                        <option value="read">Read</option>
				                        <option value="none">None</option>
				                      </select>
				                    </div>
				                  </div>
				                  <div className="book-title">{book.title}</div>
				                  <div className="book-authors">{book.authors}</div>
				                </div>
				              </li>
				          ))}
				          
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
