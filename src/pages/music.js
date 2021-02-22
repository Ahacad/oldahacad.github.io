import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import music from "./music.json"
import Card from "./card.js"

const MusicYear = ({ year, className = "bg-primary" }) => {
  return (
    <>
      <div
        className={className + " mt-4 ml-1 w-75 text-white rounded"}
        style={{ opacity: "0.8" }}
      >
        <h3 className="p-2" style={{ fontFamily: "sans-serif" }}>
          {year}
        </h3>
      </div>
      <div className="container pt-5">
        <div className="row text-center">
          {music.map((data, index) => {
            if (data.year == year) {
              return (
                <Card
                  name={data.name}
                  image={`/music/${data.image}`}
                  description={data.description}
                  width={200}
                  height={200}
                />
              )
            }
          })}
        </div>
      </div>
    </>
  )
}

const Videos = ({}) => {
  return (
    <>
      <MusicYear year="2021" className="bg-info" />
    </>
  )
}

export default Videos
