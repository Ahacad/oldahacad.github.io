import React from "react"
import "bootstrap/dist/css/bootstrap.css"


import books from "./books.json"
import Card from './card.js'


const Books = ({}) => {
  return (
    <>
    <div className="mt-4 ml-1 w-75 bg-info text-white rounded" style={{opacity: "0.8"}}>
      <h3 className="p-2" style={{fontFamily: "sans-serif"}}>2021</h3>
    </div>
    <div className="container pt-5"> 
      <div className="row text-center">
    {
      books.map((data, index) => {
        return <Card name={data.name} image={`/books/${data.image}`} description={data.description} href={data.url ?? "#"}/>
      })
    }
      </div>
    </div> 
    </>
  )
}

export default Books
