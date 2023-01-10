import Poser from "@pose/Poser";
import PoseResult from "@pose/PoseResult";
import tempViedo from "@static/video/jongpark.mp4"

const poser = new Poser();

const video = document.createElement("video")
video.width = 480
video.src = tempViedo
video.controls = true
video.muted = true

document.getElementsByTagName("body")[0]?.appendChild(video)

document.addEventListener("keydown", (e) => {
    if(e.key === " ") {
        video.play()
        poser.sendAsync(video).then((result: PoseResult) => {
            console.log(result)
        })
    }
})