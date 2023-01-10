import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import Camera from "./Camera";
import Renderer from "./Renderer";
import Scene from "./Scene";
import Light from './Light'
export default class ThreeDefault {
    private static defaultOption:Option = { }
    private option: Option
    private scene:Scene
    public camera:Camera
    private renderer:Renderer
    private light:Light
    private control?:OrbitControls
    private parent: HTMLElement
    constructor(
        parent: HTMLElement,
        option?: Option
    ) {
        this.parent = parent
        this.option = option ? option : ThreeDefault.defaultOption
        this.scene = new Scene()
        this.camera = new Camera(95, this.parent.clientWidth / this.parent.clientHeight)
        this.renderer = new Renderer(this.parent.clientWidth * 2, this.parent.clientHeight * 2, this.parent)
        this.light = new Light()
        this.light.addLight(this.scene)
        this.applyOption()
        this.resize()
        window.addEventListener('resize', this.resize.bind(this), false)
    }
    private applyOption = () => {
        if(this.option.orbitcontrol != undefined) {
            this.control = new OrbitControls(this.camera, this.option.orbitcontrol)
        }
    }
    public update = () => {
        this.render()
    }
    public getScene() {
        return this.scene
    }
    public getCamera() {
        return this.camera
    }
    private render() {
        this.renderer.render(this.scene, this.camera)
    }
    private resize() {
        this.camera.aspect = this.parent.clientWidth / this.parent.clientHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(this.parent.clientWidth, this.parent.clientHeight)
        this.render()
    }
}
export interface Option {
    orbitcontrol?: HTMLElement
}
export { Camera, Renderer, Scene, Light }