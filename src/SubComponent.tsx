import React from "react"
import { useSet, useValue } from "./store"

const SubComponent = (props: any) => {
  const { id, value } = props
  const set = useSet()

  const updateStore = (id: number, value: string) => {
    set(id, { name: value, updatedOn: Date.now() })
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        outline: "2px solid red",
        padding: "4px",
        margin: "8px",
      }}
    >
      <h3>{id}</h3>
      <h3>{value?.name}</h3>
      <h3>{value?.updatedOn}</h3>
      <button onClick={() => updateStore(id, "b")}>Set "b"</button>
      <button onClick={() => updateStore(id, "a")}>Set "a"</button>
    </div>
  )
}

export default React.memo(SubComponent, (prevProps, nextProps) => {
  return prevProps.value.updatedOn === nextProps.value.updatedOn
})
