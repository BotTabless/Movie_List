"use client"

import { useState } from "react"
import { X } from "@phosphor-icons/react"
import Youtube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handlerVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        widht: "400",
        height: "350"
    }

    const Player = () => {
        return(
            <div className="fixed buttom-2 right-2">
                <button
                onClick={handlerVideoPlayer}
                className="text-color-primary float-right bg-color-secondary px-3 mb-1">
                    <X size={32} />
                </button>

                <Youtube
                videoId={youtubeId}
                onReady={(event) => event.target.pauseVideo()}
                opts={option}
                onError={() => alert("Vidio Error")}
                />
            </div>
        )
    }

    const ButtonOpenTrailer = () => {
        return (
            <button
                onClick={handlerVideoPlayer}
                className="fixed buttom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl">
                Tonton Trailer
            </button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenTrailer/>
}

export default VideoPlayer