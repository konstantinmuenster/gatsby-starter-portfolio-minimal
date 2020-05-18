import React from "react"
import PropTypes from "prop-types"

const Medium = ({ color }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      fill={color}
      x="0px"
      y="0px"
      viewBox="-237 239 24 24"
    >
      <path
        d="M-234.2,245.9c0-0.3-0.1-0.6-0.3-0.8l-2.2-2.7V242h7l5.4,11.8l4.7-11.8h6.6v0.4l-1.9,1.8c-0.2,0.1-0.2,0.3-0.2,0.5v13.5
	c0,0.2,0,0.4,0.2,0.5l1.9,1.8v0.4h-9.4v-0.4l1.9-1.9c0.2-0.2,0.2-0.2,0.2-0.5v-10.9l-5.4,13.7h-0.7l-6.3-13.7v9.2
	c-0.1,0.4,0.1,0.8,0.3,1.1l2.5,3.1v0.4h-7.1v-0.4l2.5-3.1c0.3-0.3,0.4-0.7,0.3-1.1C-234.2,256.5-234.2,245.9-234.2,245.9z"
      />
    </svg>
  )
}

Medium.propTypes = {
  color: PropTypes.string,
}

Medium.defaultProps = {
  color: "#000000",
}

export default Medium
