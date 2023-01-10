import { LandmarkList, NormalizedLandmarkList, Pose } from "@mediapipe/pose";
import PoseResult from "@pose/PoseResult";
import Log from "./Log";
import LoggerAble from "./LoggerProps";

export default class PoseLog {
    private array: Array<Log> = new Array()
    private duration: number = 0
    private isSorted: boolean = true
    constructor (

    ) {

    }
    public recieve(log: Log) {
        this.isSorted = false
        this.array.push(log)
    }
    public get(time: number, strict?: boolean): Log {
        this.sort()
        let firstBiggerIdx: number = this.array.length
        for(let i = 0; i < this.array.length; i++) {
            if(this.array[i].time < time) {
                firstBiggerIdx = i
                break;
            }
        }
        if(firstBiggerIdx === this.array.length) {
            return this.array[this.array.length - 1]!
        }
        else {
            if(firstBiggerIdx === 0) {
                return this.array[0]
            }
            else {
                return {
                    //FIXME: 3번째 매개변수의 0.5를 비율에 알맞은 값으로 변경해야함
                    result: PoseLog.MergePoseResult(
                        this.array[firstBiggerIdx - 1].result, 
                        this.array[firstBiggerIdx].result, 
                        0.5, 
                        strict), 
                    time
                }
            }
        }
    }
    public download() {
        this.sort()
        //TODO: 다운로드 기능 구현
    }
    private sort() {
        if(!this.isSorted) {
            this.array.sort((log: Log) => log.time)
            this.isSorted = true
        }
    }
    private static MergePoseResult(fir: PoseResult, sec: PoseResult, ratio: number, strict?: boolean): PoseResult {
        const firRatio = ratio
        const secRatio = 1 - ratio
        let mergedPoseLandmarks: NormalizedLandmarkList = new Array()
        let mergedPoseWorldLandmarks: LandmarkList = new Array()
        for(let i = 0; i < fir.poseLandmarks.length; i++) {
            mergedPoseLandmarks.push({
                x: fir.poseLandmarks[i].x + sec.poseLandmarks[i].x,
                y: fir.poseLandmarks[i].y + sec.poseLandmarks[i].y,
                z: fir.poseLandmarks[i].z + sec.poseLandmarks[i].z,
                visibility : (fir.poseLandmarks[i].visibility ?? 0) + 
                (sec.poseLandmarks[i].visibility ?? 0)
            })
        }
        for(let i = 0; i < fir.poseWorldLandmarks.length; i++) {
            mergedPoseWorldLandmarks.push({
                x: fir.poseWorldLandmarks[i].x + sec.poseWorldLandmarks[i].x,
                y: fir.poseWorldLandmarks[i].y + sec.poseWorldLandmarks[i].y,
                z: fir.poseWorldLandmarks[i].z + sec.poseWorldLandmarks[i].z,
                visibility : (fir.poseWorldLandmarks[i].visibility ?? 0) + 
                (sec.poseWorldLandmarks[i].visibility ?? 0)
            })
        }
        return new PoseResult({
            poseLandmarks: mergedPoseLandmarks,
            poseWorldLandmarks: mergedPoseWorldLandmarks,
            image: fir.image,
            segmentationMask: fir.segmentationMask
        })
    }
}