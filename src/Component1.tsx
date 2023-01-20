import { useData, useSet } from "./store"
import SubComponent from "./SubComponent"

const Component1 = () => {
  const data = useData()
  const set = useSet()

  return (
    <div>
      <h1>Component1 - data</h1>
      {Object.entries(data).map(([key, value]) => (
        <SubComponent id={key} key={key} />
      ))}
      <button onClick={() => set(1, { name: "b", updatedOn: Date.now() })}>
        Set 1: "b"
      </button>
      <button onClick={() => set(1, { name: "a", updatedOn: Date.now() })}>
        Set 1: "a"
      </button>
      <button onClick={() => set(2, { name: "b", updatedOn: Date.now() })}>
        Set 2: "b"
      </button>
      <button onClick={() => set(2, { name: "a", updatedOn: Date.now() })}>
        Set 2: "a"
      </button>{" "}
    </div>
  )
}

export default Component1
