import React from "react"

const Card = ({name, description, image, width=200, height=260, href="#"}) => {
  return (
    <div className="col-xl-3 col-sm-6 mb-5">
      <div className="rounded shadow py-5 px-4" style={{height: 450+'px'}}>
        <a href={href}><img src={image} alt={name} style={{width: `${width}px`, height: `${height}px`}}/></a>
        <div >
          <h5 className="text-capitalize">{name}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
