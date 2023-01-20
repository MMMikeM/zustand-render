import { create } from "zustand"
import { createTrackedSelector } from "react-tracked"

type Store = {
  data: Item
  setData: (id: number, value: Item[number]) => void
}

type Item = Record<
  number,
  {
    name: string
    updatedOn: number
  }
>

const now = Date.now()

const data = {
  1: { name: "a", updatedOn: now },
  2: { name: "b", updatedOn: now },
  3: { name: "c", updatedOn: now },
  4: { name: "d", updatedOn: now },
  5: { name: "e", updatedOn: now },
}

const useStore = create<Store>()((set) => ({
  data,
  setData: (id: number, value: Item[number]) => {
    set(({ data }) => {
      data[id] = value
      return { data }
    })
  },
}))

export const useValue = (id: number) => useStore(({ data }) => data[id])
export const useSet = () => useStore(({ setData }) => setData)
export const useData = () => useStore(({ data }) => data)
export const useTrackedStore = createTrackedSelector(useStore)
