import { createContext } from "react"

const Context = createContext({
  isIntroDone: false,
  setIsIntroDone: () => {},
})

export default Context
