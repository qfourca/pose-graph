import * as THREE from 'three'
export default class Line {
    protected static readonly defaultMaterial: THREE.Material = new THREE.LineBasicMaterial({ color: 0x0000FF })
    private points:Array<THREE.Vector3> = new Array()
    private line:THREE.Line
    constructor (

    ) {
        const geometry = new THREE.BufferGeometry().setFromPoints( this.points );
        this.line = new THREE.Line( geometry, Line.defaultMaterial );
    }
    public set(points: Array<THREE.Vector3>) {
        this.points = points
        this.line.geometry.setFromPoints(this.points)
    }
    public render(scene: THREE.Scene) {
        scene.add(this.line)
    }
}