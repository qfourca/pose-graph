import Component from "@/ui/component";
import Log from "./Log";
import LoggerAble from "./LoggerAble";
import S from '@style/TextLogger.scss'
import PoseResult from "@pose/PoseResult";
export default class TextLogger extends Component implements LoggerAble {
    private container: Element
    constructor (
        parent: HTMLElement
    ) {
        super(parent)
        this.render(`
            <div class="${S.container}">
            </div>
        `)
        this.container = this.get(S.container)
    }
    
    public recieve =  (log: Log) => {
        this.container.innerHTML = String(log.result.getJointAngle(PoseResult.LEFT_LEG).getAngle("degree"))
    }
}