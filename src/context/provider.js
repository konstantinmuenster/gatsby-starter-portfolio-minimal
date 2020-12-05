import React, { useState } from "react"
import PropTypes from "prop-types"

import Context from "."

const GlobalStateProvider = ({ children, initialState }) => {
  const [state, setState] = useState(initialState)

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  )
}

GlobalStateProvider.propTypes = {
  children: PropTypes.any.isRequired,
  initialState: PropTypes.shape({
    isIntroDone: PropTypes.bool.isRequired,
    darkMode: PropTypes.bool.isRequired,
  }).isRequired,
}

export default GlobalStateProvider
