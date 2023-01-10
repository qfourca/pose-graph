export default class JoinAngle {
    public name: string
    private radian: number
    public accuracy: number
    constructor(
        name: string,
        radian: number,
        accuracy: number
    ) {
        this.name = name
        this.radian = radian
        this.accuracy = accuracy
    }
    public getAngle(type?: "radian" | "degree"): number {
        if (type === "degree") { return this.radian * 180 / Math.PI }
        else { return this.radian }
    }
}