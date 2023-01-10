import * as THREE from 'three'
export default class Axis {
    private length: number = 100

    protected xMaterial: THREE.Material = new THREE.MeshStandardMaterial({ color: 0xFF0000 })
    protected yMaterial: THREE.Material = new THREE.MeshStandardMaterial({ color: 0x00FF00 })
    protected zMaterial: THREE.Material = new THREE.MeshStandardMaterial({ color: 0x0000FF })

    protected origin: THREE.SphereGeometry = new THREE.SphereGeometry(1, 32, 16)
    protected xAsix: THREE.BoxGeometry = new THREE.BoxGeometry(this.length, 1, 1)
    protected yAsix: THREE.BoxGeometry = new THREE.BoxGeometry(1, this.length, 1)
    protected zAsix: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, this.length)

    public meshs: Array<THREE.Mesh> = new Array()
    constructor(
        position: THREE.Vector3
    ) {
        position.set(position.x - this.length / 2, position.y - this.length / 2, position.z - this.length / 2)
        let temp:any = new THREE.Mesh(this.origin, new THREE.MeshStandardMaterial({ color: 0x000000 }))
        temp.position.set(position.x, position.y, position.z)
        this.meshs.push(temp)

        temp = new THREE.Mesh(this.xAsix, this.xMaterial)
        temp.position.set(position.x + this.length / 2, position.y, position.z)
        this.meshs.push(temp)

        temp = new THREE.Mesh(this.yAsix, this.yMaterial)
        temp.position.set(position.x, position.y + this.length / 2, position.z)
        this.meshs.push(temp)

        temp = new THREE.Mesh(this.zAsix, this.zMaterial)
        temp.position.set(position.x, position.y, position.z + this.length / 2)
        this.meshs.push(temp)
    }
    public render(scene: THREE.Scene) {
        this.meshs.forEach((mesh: THREE.Mesh) => {
            scene.add(mesh)
        })
    }
}