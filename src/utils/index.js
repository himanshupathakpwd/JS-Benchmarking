export { benchmark, getDashesList }

function benchmark(func, iter = 1000000) {
  const t1 = Date.now()
  for (let i = 0; i < iter; i++) {
    func.call()
  }
  const t2 = Date.now()
  console.log(`${func.name} took ${t2 - t1} ms with ${iter} iterations`)
}

function getDashesList() {
  return "======="
}
