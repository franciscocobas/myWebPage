import React, { useState } from "react"

import { newsPaper } from "../data/newsPaper"
const NewsPaper = () => {
  const [selectedNewsPaper, setSelectedNewsPaper] = useState(0)
  return (
    <div className="border-4 p-1">
      <div className="border-4 text-center">Noticias sobre mi en la prensa</div>
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <img
            className="w-60 h-15 mr-4"
            src={newsPaper[selectedNewsPaper].img}
            alt="El observador foto"
          />
        </div>
        <div className="col-span-7 self-center">
          {newsPaper[selectedNewsPaper].description}
        </div>
      </div>
      <div className="text-center border-t-2 mt-1 p-1">
        <button
          onClick={() => {
            setSelectedNewsPaper(actualSelected => {
              return (actualSelected + 1) % 3
            })
          }}
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold
          hover:text-white py-2 px-4 border border-blue-500
          hover:border-transparent rounded"
        >
          Siguiente Noticia
        </button>
      </div>
    </div>
  )
}

export default NewsPaper
