type Light = { postion: number; isActive: number }

export class Garden {
  light!: Light[][]
  lightsUp!: number

  constructor() {
    this.light = [[{ postion: 0, isActive: 0 }]]
    this.lightsUp = 0
  }

  lightsUpCount(): number {
    return this.lightsUp
  }
}
