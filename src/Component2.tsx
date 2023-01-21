import { useSet, useTrackedStore } from "./store"
import SubComponent from "./SubComponent"

const Component2 = () => {
  const state = useTrackedStore()
  const data = state.data

  return (
    <div>
      <h1>Component2 - tracked</h1>
      {Object.entries(data).map(([key, value]) => (
        <SubComponent id={key} key={key} value={value} />
      ))}
    </div>
  )
}

export default Component2
