import * as THREE from 'three'
import { Vector3 } from 'three'

class Camera extends THREE.PerspectiveCamera{
	constructor (FOV: number, aspect: number) {
		super(FOV, aspect, 1, 1000)
		this.near = 0.001
		this.far = 500
	}
}
export default Camera