import PoseResult from "@pose/PoseResult";

export default interface LoggerAble {
    recieve: (result: PoseResult, time: number) => void
}