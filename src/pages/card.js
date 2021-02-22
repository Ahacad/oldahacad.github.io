import React from "react"

const Card = ({
  name,
  description,
  image,
  width = 200,
  height = 260,
  href = "#",
  readed = false,
}) => {
  return (
    <div className="col-xl-3 col-sm-6 mb-5">
      <div
        className="rounded py-5 px-4"
        style={{
          height: 450 + "px",
          boxShadow: readed
            ? "0 0.5rem 1.1rem rgba(9, 123, 188, 0.5"
            : "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
        }}
      >
        <a href={href}>
          <img
            src={image}
            alt={name}
            style={{ width: `${width}px`, height: `${height}px` }}
          />
        </a>
        <div>
          <h5 className="text-capitalize">{name}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
