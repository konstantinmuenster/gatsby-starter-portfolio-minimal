import { useEffect, useContext } from "react"

import Context from "../context"

const useDarkMode = () => {
  const { state, setState } = useContext(Context)

  useEffect(() => {
    const darkScheme = "(prefers-color-scheme: dark)"

    const toggleTheme = event => {
      if (event.matches) {
        setState({ ...state, darkMode: true })
      } else {
        setState({ ...state, darkMode: false })
      }
    }

    if (window.matchMedia && window.matchMedia(darkScheme).matches) {
      setState({ ...state, darkMode: true })
    }

    window.matchMedia(darkScheme).addEventListener("change", toggleTheme)

    return () => {
      window.matchMedia(darkScheme).removeEventListener("change", toggleTheme)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return state.darkMode
}

export default useDarkMode
