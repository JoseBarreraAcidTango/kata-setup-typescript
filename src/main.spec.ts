import { describe, it, expect } from "vitest"
import { Garden } from "./main.js"

describe("Default test", () => {
  it("should work", () => {
    const result = new Garden()
    expect(result.lightsUpCount).toBe(0)
  })
})
