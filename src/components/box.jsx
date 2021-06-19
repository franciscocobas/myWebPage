
import * as React from "react"

const Box = () => (
    <div className="container mt-4 mx-auto">
        <div className="
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
            ">
            <div>
                <h2 className="text-lg mb-2">
                    Welcome my life :)
                                    <span className="
                                    text-sm text-teal-800
                                    font-mono
                                    bg-teal-100
                                    inline
                                    rounded-full
                                    px-2
                                    align-top
                                    float-right
                                    animate-pulse
                                    ">
                        Introduccion</span>
                </h2>
                <p className="
                    font-light font-mono
                    text-sm text-gray-700
                    hover:text-gray-900
                    transition-all
                    duration-200
                    ">
                    <p>
                        Mi nombre Damian Sire y en las proximas lineas tratare de contarte quien soy y que es lo que hago.
                                    </p>
                </p>
            </div>
        </div>
    </div>
)

export default Box
