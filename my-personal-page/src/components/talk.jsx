import React from "react"
const Talk = props => {
  return (
    <div className="container mt-4 mx-auto">
      <div
        className="
card
cursor-pointer
border border-gray-400
rounded-lg
hover:shadow-md
hover:border-opacity-0
transform
hover:-translate-y-1
transition-all
duration-200
p-2
grid
grid-cols-12
gap-2 
"
      >
        <div className="col-span-9">
          <h2 className="text-lg mb-2">{props.talk.talkTitle}</h2>
          <p
            className="
font-light font-mono
text-sm text-gray-700
hover:text-gray-900
transition-all
duration-200
"
          >
            <p>{props.talk.talkLink} </p>
          </p>
        </div>
        <div className="col-span-3">
          <span
            className="
text-sm text-teal-800
font-mono
bg-teal-100
inline
rounded-full
px-2
align-top
float-right
animate-pulse
"
          >
            {props.talk.communityName}
            <img src={props.talk.communityImg} width="50" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Talk
