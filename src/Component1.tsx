import { useData } from "./store"
import SubComponent from "./SubComponent"

const Component1 = () => {
  const data = useData()

  return (
    <div>
      <h1>Component1 - data</h1>
      {Object.entries(data).map(([key, value]) => (
        <SubComponent id={key} key={key} value={value} />
      ))}
    </div>
  )
}

export default Component1
