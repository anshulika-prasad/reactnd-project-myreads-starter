import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchResultPage from './SearchResultPage'
import AllBooksPage from './AllBooksPage'

class BooksApp extends React.Component {
	constructor(props) {
	    super(props);
	    // Manually bind this method to the component instance...
	    this.fetchAllBooks = this.fetchAllBooks.bind(this);
  	}
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    allBooks: [],
    searchResults:[],
    searchLoading:false
  }


	componentDidMount() {
		console.log("ANSHULIKA componentDidMount")
		this.fetchAllBooks()
  	}

  	fetchAllBooks=()=>{
  		console.log("ANSHULIKA fetchAllBooks called " )
  		BooksAPI.getAll().then((allBooks) => {
		  	this.setState({ allBooks })
		  
		})
  	}

	updateBook(book,shelf) {
		
		console.log("ANSHULIKA updateBook : "  + book.title + "  " + shelf)
		BooksAPI.update(book,shelf).then(()=>{
      		this.fetchAllBooks()
    	})
  	}

	shouldShowSearchPage(showSearchPage) {
		console.log("ANSHULIKA shouldShowSearchPage : " + showSearchPage)
		// this.setState({
		//     showSearchPage:showSearchPage
		// })
	}
  	searchBooks=(query,maxResults)=>{
	    this.setState({
	      searchLoading:true
	    })
	    console.log("ANSHULIKA searchBooks : " + query + "  maxResults : "+ maxResults)
	    BooksAPI.search(query,maxResults).then(results=>{

		    if (results) {
                if (results.error) {
                    return;
                }
                this.setState({
                    searchResults: results.map((bookResult) => {
                        const myBook = this.state.allBooks.find((myBook) => (myBook.id === bookResult.id));
                        if (myBook) {
                            bookResult.shelf = myBook.shelf;
                        }
                        return bookResult;
                    }),
                    searchLoading: false
                })
            }
        });
  	}
  render() {


    return (
      <div className="app">
 
		<Route
			path='/search'
			render={()=>(
				<SearchResultPage
					searchBooks={this.searchBooks}
					searchLoading={this.state.searchLoading}
					searchResults={this.state.searchResults}
					updateBook={this.updateBook}
					shouldShowSearchPage={this.shouldShowSearchPage}
				/>
			)}
		/>
   
        <Route
          exact path='/'
          render={()=>(
            <AllBooksPage
        		allBooks={this.state.allBooks}
            	updateBook={this.updateBook}
        	/>
          )}
        />
     
      </div>
    )
  }
}

export default BooksApp
