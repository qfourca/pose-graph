import * as THREE from 'three'
import { Vector2 } from 'three';

export default class Light {
    private directionalLight: THREE.DirectionalLight
    private ambientLight: THREE.AmbientLight
    constructor (

    ){
        const color = 0xdddddd;
        const intensity = 0.9; // 강도
        this.directionalLight = new THREE.DirectionalLight(color, intensity);
        this.ambientLight = new THREE.AmbientLight(color, intensity)
    }

    addLight(scene:THREE.Scene){
        scene.add(this.directionalLight)
        scene.add(this.ambientLight)
    }
}