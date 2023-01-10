import Poser from "@pose/Poser";
import PoseResult from "@pose/PoseResult";
import TextLogger from "./log/TextLogger";
import tempViedo from "@static/video/good.mp4"

const poser = new Poser();

const video = document.createElement("video")
video.width = 480
video.src = tempViedo
video.controls = true
video.muted = true

document.getElementsByTagName("body")[0]?.appendChild(video)

const loggerContainer = document.createElement("div")
loggerContainer.style.width = "50vw"
loggerContainer.style.height = "100vh"
document.getElementsByTagName("body")[0].appendChild(loggerContainer)

const logger = new TextLogger(loggerContainer)

document.addEventListener("keydown", (e) => {
    if(e.key === " ") {
        video.play()
        setInterval(() => {
            poser.sendAsync(video).then((result: PoseResult) => {
                logger.recieve({
                    result,
                    time: 0
                })
            })
        }, 10)

    }
})

