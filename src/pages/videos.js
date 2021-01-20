import React from "react"
import "bootstrap/dist/css/bootstrap.css"


import videos from "./videos.json"
import Card from './card.js'


const VideoYear = ({year, className="bg-primary"}) => {
  return (
    <>
      <div className={className+" mt-4 ml-1 w-75 text-white rounded"} style={{opacity: "0.8"}}>
        <h3 className="p-2" style={{fontFamily: "sans-serif"}}>{year}</h3>
      </div>
      <div className="container pt-5"> 
        <div className="row text-center">
      {
        videos.map((data, index) => {
          if (data.year == year) {
            return <Card name={data.name} image={`/videos/${data.image}`} description={data.description}/>
          }
        })
      }
        </div>
      </div> 
    </>
  )
}

const Videos = ({}) => {
  return (
    <>
    <VideoYear year="2021" className="bg-info" />
    <VideoYear year="2020" className="bg-primary"/>
  </>
  )
}

export default Videos
