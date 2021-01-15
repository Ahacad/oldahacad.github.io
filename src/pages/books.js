import React from "react"
import "bootstrap/dist/css/bootstrap.css"


import books from "./books.json"


const BookCard = ({bookname, description, image}) => {
  return (
    <div className="col-xl-3 col-sm-6 mb-5">
      <div className="rounded shadow py-5 px-4" style={{height: 450+'px'}}>
        <img src={image} alt={bookname} style={{width: 200+'px', height: 260+'px'}}/>
        <div >
          <h5 className="text-capitalize">{bookname}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

const Books = ({}) => {
  return (
    <>
    <div className="container pt-5"> 
      <div className="row text-center">
    {
      books.map((data, index) => {
        return <BookCard bookname={data.name} image={`/books/${data.image}`} description={data.description}/>
      })
    }
      </div>
    </div> 
    </>
  )
}

export default Books
