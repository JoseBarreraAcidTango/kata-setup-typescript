import { describe, it, expect } from "vitest"
import { Garden } from "./main.js"

describe("Default test", () => {
  it("initialize with 0 lights on", () => {
    const result = new Garden(1000, 1000)
    expect(result.lightsUp).toBe(0)
  })

  describe("Garden light instructions", () => {
    it("should follow the instructions and count the lights correctly", () => {
      const garden = new Garden(1000, 1000)

      garden.turnOn(887, 9, 959, 629)
      garden.turnOn(454, 398, 844, 448)
      garden.turnOff(539, 243, 559, 965)
      garden.turnOff(370, 819, 676, 868)
      garden.turnOff(145, 40, 370, 997)
      garden.turnOff(301, 3, 808, 453)
      garden.turnOn(351, 678, 951, 908)
      garden.toggle(720, 196, 897, 994)
      garden.toggle(831, 394, 904, 860)

      console.log(garden.lightsUpCount())
      console.log(garden.lightsUp)
      expect(garden.lightsUpCount()).toBe(230022)
    })
  })
})
