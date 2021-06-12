import React from 'react'
import BookCard from './BookCard'
export default function BookList(props) {
    return (
        <div className="list">
        {
           props.books.map((book,i)=>{
                return <BookCard key={book.id} info={book}/>
            })
        }
        

       
    </div>
    )
}
