export class Garden {
  lights: boolean[][]
  lightsUp: number

  constructor(numberOfRows: number, numberOfColumns: number) {
    this.lights = Array.from({ length: numberOfRows }, () => Array(numberOfColumns).fill(false))
    this.lightsUp = 0
  }

  turnOn(x1: number, y1: number, x2: number, y2: number): void {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (!this.lights[i][j]) this.lightsUp += 1
        this.lights[i][j] = true
      }
    }
  }

  turnOff(x1: number, y1: number, x2: number, y2: number): void {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (this.lights[i][j]) this.lightsUp -= 1
        this.lights[i][j] = false
      }
    }
  }

  toggle(x1: number, y1: number, x2: number, y2: number): void {
    for (let i = x1; i <= x2; i++) {
      for (let j = y1; j <= y2; j++) {
        if (this.lights[i][j]) {
          this.lightsUp -= 1
          this.lights[i][j] = false
        } else {
          this.lightsUp += 1
          this.lights[i][j] = true
        }
      }
    }
  }

  lightsUpCount(): number {
    let count = 0
    for (let row of this.lights) {
      for (let light of row) {
        if (light) {
          count++
        }
      }
    }
    return count
  }
}
