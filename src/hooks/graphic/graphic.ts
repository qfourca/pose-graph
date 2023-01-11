import { LandmarkList, NormalizedLandmark } from "@mediapipe/pose";
import { Vector3 } from "three";
import ThreeDefault from "./three";
import Line from "./line";
import Point from "./point";
import Asix from './asix'

export default class Graphic {
    private threeDefault: ThreeDefault
    private static pointsCount: number = 33;
    private points: Array<Point> = new Array()
    private lines: Array<Line> = new Array()
    private asix: Asix = new Asix(new Vector3(0, 0, 0))
    constructor(
        parent: HTMLElement
    ){
        const element = parent
        this.threeDefault = new ThreeDefault(element, {
            orbitcontrol: element
        })
        this.threeDefault.getCamera().position.set(0, 0, 150)
        for(let i = 0; i < Graphic.pointsCount; i++) {
            this.points.push(new Point(new Vector3(0, 0, 0)))
            this.points[i].render(this.threeDefault.getScene())
        }
        document.addEventListener('keydown', (e) => {
            if(e.key === "v") {
                this.threeDefault.getCamera().lookAt(0, 0, 0)
                console.log(this.threeDefault.getCamera().position)
                
            }
        })
        Graphic.bones.forEach((element) => {
            const line = new Line()
            this.lines.push(line)
            line.render(this.threeDefault.getScene())
        })
        this.asix.render(this.threeDefault.getScene())
    }
    /**점 업데이트 */
    public update(points?: LandmarkList) {
        if(points != undefined) {
            this.points.forEach((element: Point, idx: number) => {
                let color: number;
                if(points[idx].visibility === undefined) {
                    color = 0xFF0000
                }
                else if(points[idx].visibility! < 0.75) {
                    color = 0xFF0000
                }
                else {
                    color = 0x00AA00
                }
                element.set(
                    Graphic.LandmarkToVec3(points[idx]),
                    color
                )
            })
            Graphic.bones.forEach((element, idx) => {
                this.lines[idx].set([
                    Graphic.LandmarkToVec3(points[element.parent]),
                    Graphic.LandmarkToVec3(points[element.child]),
                ])
            })
        }
    }

    private static LandmarkToVec3(landMark: NormalizedLandmark): Vector3 {
        return new Vector3(
            50 - landMark.x * 100,
            50 + landMark.y * -100,
            landMark.z * -100
        )
    }
    public static bones: Array<boneInfo> = [
        {
            parent: 11,
            child: 13,
            name: "UpperArmL"
        },
        {
            parent: 13,
            child: 15,
            name: "LowerArmL"
        },
        {
            parent: 11,
            child: 23,
            name: "SpineL"
        },
        {
            parent: 23,
            child: 25,
            name: "UpperLegL",
        },
        {
            parent: 25,
            child: 27,
            name: "LowerLegL",
        },
        {
            parent: 27,
            child: 29,
            name: "HeelL"
        },
        {
            parent: 27,
            child: 31,
            name: "TopFootL"
        },
        {
            parent: 29,
            child: 31,
            name: "BottomFootL"
        },
    
        {
            parent: 23,
            child: 24,
            name: "Hips"
        },
        {
            parent: 11,
            child: 12,
            name: "Shoulder"
        },
        {
            parent: 12,
            child: 14,
            name: "UpperArmR"
        },
        {
            parent: 14,
            child: 16,
            name: "LowerArmR"
        },
        {
            parent: 12,
            child: 24,
            name: "SpineR"
        },
        {
            parent: 24,
            child: 26,
            name: "UpperLegR",
        },
        {
            parent: 26,
            child: 28,
            name: "LowerLegR",
        },
        {
            parent: 28,
            child: 30,
            name: "HeelR"
        },
        {
            parent: 28,
            child: 32,
            name: "TopFootR"
        },
        {
            parent: 30,
            child: 32,
            name: "BottomFootR"
        },
    ]

}

interface boneInfo {
    name: string
    parent: number
    child: number
}