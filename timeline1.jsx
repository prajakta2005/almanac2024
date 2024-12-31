import React from "react"
import { Chrono } from "react-chrono";

const TimeL = () => {
  const items = [{
    title: "",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  },
  {
    title: "",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  }, ];

  return (
    <div style={{ width: "1000px", height: "200px" }}>
      <Chrono items={items} />
    </div>
  )
}

export default TimeL;