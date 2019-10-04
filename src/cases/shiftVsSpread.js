import { benchmark, getDashesList } from "../utils"
export { shiftVsSpread }

function shiftVsSpread() {
  init()

  function init() {
    console.log(getDashesList(), "Start Shift VS Spread", getDashesList())
    benchmark(withShift)
    benchmark(withSpread)
    console.log(getDashesList(), "End Shift VS Spread", getDashesList())

    function withShift() {
      const animals = ["pig", "goat", "sheep"]
      animals.shift("Lion")
      return animals
    }

    function withSpread() {
      const animals = ["pig", "goat", "sheep"]
      return ["Lion", ...animals]
    }
  }
}
