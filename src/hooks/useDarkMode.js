import { useEffect, useContext } from "react"

import Context from "../context"

const useDarkMode = () => {
  const { state, setState } = useContext(Context)

  useEffect(() => {
    const darkSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const toggleTheme = event => {
      if (event.matches) {
        setState({ ...state, darkMode: true })
      } else {
        setState({ ...state, darkMode: false })
      }
    }

    if (darkSchemeQuery.matches) {
      setState({ ...state, darkMode: true })
    }

    if (darkSchemeQuery.addEventListener) {
      darkSchemeQuery.addEventListener("change", toggleTheme)
      return () => {
        darkSchemeQuery.removeEventListener("change", toggleTheme)
      }
    } else {
      // backwards compatibility
      // https://betterprogramming.pub/using-window-matchmedia-in-react-8116eada2588
      darkSchemeQuery.addListener(toggleTheme)
      return () => {
        darkSchemeQuery.removeListener(toggleTheme)
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return state.darkMode
}

export default useDarkMode
