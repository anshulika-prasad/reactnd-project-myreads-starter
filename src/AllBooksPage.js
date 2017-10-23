import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


class AllBooksPage extends Component {
	static propTypes = {
    	updateBook:PropTypes.func.isRequired,
    	allBooks:PropTypes.array.isRequired
  	}

  	componentDidMount(){
    	console.log('All types of books!');
	}
	render(){
		let curReading = this.props.allBooks.filter(book => book.shelf === "currentlyReading")
		let wantTRead = this.props.allBooks.filter(book => book.shelf === "wantToRead")
		let alreadyRead = this.props.allBooks.filter(book => book.shelf === "read")

		return (
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
				                      <select value={book.shelf} onChange={(e)=>{this.props.updateBook(book, e.target.value);}} >
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
				                      <select value={book.shelf} onChange={(e)=>{this.props.updateBook(book, e.target.value);}} >
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
					                      <select value={book.shelf} onChange={(e)=>{this.props.updateBook(book, e.target.value);}} >
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
		        	<Link to='/search'>Add a book</Link>
		        </div>
		      </div>
		    )
	}

}
export default AllBooksPage