import { benchmark, getDashesList } from "../utils"

export { pushVsSpread }

function pushVsSpread() {
  init()

  function init() {
    console.log(getDashesList(), "Start Push VS Spread", getDashesList())
    benchmark(withPush)
    benchmark(withSpread)
    console.log(getDashesList(), "End Push VS Spread", getDashesList())

    function withPush() {
      const animals = ["pig", "goat", "sheep"]
      animals.push("Lion")
      // return animals
    }

    function withSpread() {
      const animals = ["pig", "goat", "sheep"]
      return [...animals, "Lion"]
    }
  }
}
