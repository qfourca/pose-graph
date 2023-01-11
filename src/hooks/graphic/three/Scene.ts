import {Scene as ThreeScene, Color} from 'three'
export default class Scene extends ThreeScene {
    constructor() {
        super()
        this.background = new Color(0xF8EDE3)
    }
}
