import { useSet, useTrackedStore } from "./store"
import SubComponent from "./SubComponent"

const Component2 = () => {
  const state = useTrackedStore()
  const data = state.data
  const set = useSet()

  return (
    <div>
      <h1>Component2 - tracked</h1>
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
      </button>
    </div>
  )
}

export default Component2
