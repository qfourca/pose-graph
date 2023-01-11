import * as THREE from 'three'

export default class Renderer extends THREE.WebGLRenderer{
	constructor (width: number, height: number, parent: HTMLElement) {
		super({
			antialias: true,
		})
		this.setClearColor(0xff0000, 1.0)
		this.setSize(width, height)
		this.outputEncoding = THREE.sRGBEncoding
		this.domElement.style.width = "100%";
		this.domElement.style.height = "100%";
		this.domElement.style.position = "absolute"
		parent.appendChild(this.domElement)
	}
}