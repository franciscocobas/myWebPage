import React from "react"
const Talk = props => {
  return (
    <a href={props.talk.talkLink} target="_blank">
      <div className="container mb-4 mx-auto" href={props.talk.talkLink}>
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
          <div className="col-span-2">
            <span
              className="
text-sm text-teal-800
font-mono
bg-teal-100
inline
rounded-full
px-2
align-top
float-left
animate-pulse
"
            >
              <img src={props.talk.communityImg} width="50" />
            </span>
          </div>
          <div className="col-span-10 self-center">
            <h2 className="text-lg mb-2">{props.talk.talkTitle}</h2>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Talk
