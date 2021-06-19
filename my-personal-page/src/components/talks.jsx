import React, { useState } from "react"
import Talk from "./talk"
import Slider from "./slider"

const Talks = props => {
  const [selectedTalk, setSelectedTalk] = useState(props.talks[0])
  return (
    <div>
      <div>{props.year}</div>
      <Talk talk={selectedTalk} />
      <div className="flex ">
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
p-2"
            >
              <img src={talk.communityImg} width="50" />
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
