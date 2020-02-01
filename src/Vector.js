export default class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static get(points) {
        return new Vector(points[0], points[1])
    }

    add(vec) {
        this.x += vec.x
        this.y += vec.y
        return this
    }

    subtract(vec) {
        this.x -= vec.x
        this.y -= vec.y
        return this
    }

    setX(num) {
        this.x = num
        return this
    }

    clone() {
        return new Vector(this.x, this.y)
    }

    divideEl(vec) {
        this.x = this.x / vec.x
        this.y = this.y / vec.y
        return this
    }
}