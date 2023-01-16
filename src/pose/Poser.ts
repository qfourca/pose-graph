import { GpuBuffer, InputImage, Options, Pose, Results } from "@mediapipe/pose";
import PoseResult from "@pose/PoseResult";

export default class Poser extends Pose {
    private poseRecieveQueue: Array<(result: Results) => void> = new Array()
    private static instance: Poser | undefined = undefined
    private static DefaultOption: Options = {
        modelComplexity: 2,
        smoothLandmarks: true,
        smoothSegmentation: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
    }
    constructor(
        option?: Options,
        url: string = "https://cdn.jsdelivr.net/npm/@mediapipe/pose"
    ) {
        if (Poser.instance === undefined) {
            super({ locateFile: (file) => `${url}/${file}` })
            this.setOptions(Poser.DefaultOption)
            this.initialize()
            this.onResults((result: Results) => {
                const lambda = this.poseRecieveQueue.pop()
                if (lambda != undefined && result.poseLandmarks != undefined)
                    lambda(result)
            })
            Poser.instance = this;
        }
        else {
            return Poser.instance
        }

    }
    public sendAsync(image: InputImage): Promise<PoseResult> {
        return new Promise((resolve, reject) => {
            this.poseRecieveQueue.push((result: Results) => {
                resolve(new PoseResult(result))
            })
            this.send({ image })
        })
    }
    public resetQueue() {
        this.poseRecieveQueue = new Array()
        this.reset()
    }
}