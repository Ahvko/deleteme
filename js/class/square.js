import {Rectangle} from './rectangle.js'

export class Square extends Rectangle {
    constructor(x, y, sideLength, lineWidth, color) {
        super(x, y, sideLength, sideLength, lineWidth, color)
    }
}