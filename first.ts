interface Point {
x: number,
y: number
}

class Monster {
constructor(public name: string, public initialPosition: Point) {
}
}

var scary = new Monster("Alien", {x: 0, y: 0});
