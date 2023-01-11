import * as THREE from 'three'
export default class Point {
    protected static readonly defaultMaterial: THREE.Material = new THREE.MeshStandardMaterial({ color: 0xFF00FF })

    protected geometry: THREE.SphereGeometry = new THREE.SphereGeometry(1, 32, 16)

    public mesh: THREE.Mesh
    
    constructor(
        position: THREE.Vector3
    ) {
        this.mesh = new THREE.Mesh(this.geometry, Point.defaultMaterial)
        this.mesh.position.set(position.x, position.y, position.z)
    }
    public render(scene: THREE.Scene) {
        scene.add(this.mesh)
    }
    public set(pos: THREE.Vector3, color?: number) {
        if(color != undefined) 
            this.mesh.material = new THREE.MeshStandardMaterial({ color })
        this.mesh.position.set(pos.x, pos.y, pos.z)
    }
}