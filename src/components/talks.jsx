import React, { useState } from "react"
import Talk from "./talk"
import Slider from "./slider"

const Talks = props => {
  const [selectedTalk, setSelectedTalk] = useState(props.talks[0])
  return (
    <div>
      <h1 className="text-lg my-3">
        Charla en{" "}
        <span className="font-bold"> {selectedTalk.communityName} </span> del
        año
        <span className="font-bold"> {selectedTalk.year}</span>
      </h1>
      <Talk talk={selectedTalk} />
      <div
        className="grid
grid-cols-6"
      >
        {props.talks &&
          props.talks.map(talk => (
            <div
              onClick={() => {
                setSelectedTalk(talk)
              }}
              className="border-2 card
cursor-pointer
border border-gray-400
rounded-lg
hover:shadow-md
hover:border-opacity-0
transform
hover:-translate-y-1
transition-all
duration-200
col-span-1
p-2"
            >
              <img src={talk.communityImg} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Talks

/*
year
[{communityImg,communityName,talkLink,talkTitle}]
*/
