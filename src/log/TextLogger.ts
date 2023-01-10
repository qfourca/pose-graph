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
                <div class="${S.valueContainer}">
                </div>
            </div>
        `)
        this.container = this.get(S.container)
        const valueContainer = this.get(S.valueContainer)
        PoseResult.joints.forEach((v, k) => {
            const kContainer = document.createElement('div')
            kContainer.innerText = k
            valueContainer.appendChild(kContainer)
        })
    }   
    
    public recieve =  (log: Log) => {
        this.container.innerHTML = String(log.result.getJointAngle(PoseResult.LEFT_KNEE).getAngle("degree"))
    }
}