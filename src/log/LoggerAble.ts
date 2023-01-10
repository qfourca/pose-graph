import PoseResult from "@pose/PoseResult";
import Log from "./Log";

export default interface LoggerAble {
    //time은 처음 부터 지난 시간
    recieve: (log: Log) => void
}