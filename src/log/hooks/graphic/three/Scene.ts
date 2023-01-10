import * as THREE from 'three'
export default class Scene extends THREE.Scene{
    constructor() {
        super()
        this.background = new THREE.Color(0xf0f0f0)
    }
}
