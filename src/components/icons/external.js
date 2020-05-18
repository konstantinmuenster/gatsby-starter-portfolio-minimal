import React from "react"
import PropTypes from "prop-types"

const External = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 194.818 194.818"
      x="0px"
      y="0px"
      role="img"
      fill={color}
      width="194.818px"
      height="194.818px"
    >
      <g>
        <path
          d="M185.8,2.2l-56.6,0c-4.8,0-9,3.6-9.3,8.4c-0.3,5.2,3.8,9.6,9,9.6h13.5c8.1,0,12.1,9.7,6.4,15.4L78,106.2
		c-3.6,3.6-3.8,9.6-0.1,13.1c1.7,1.7,4,2.5,6.2,2.5c2.3,0,4.6-0.9,6.4-2.6l70.9-70.9c5.7-5.7,15.4-1.7,15.4,6.4v13.1
		c0,4.8,3.6,9,8.4,9.3c5.2,0.3,9.6-3.8,9.6-9v-57C194.8,6.2,190.8,2.2,185.8,2.2z"
        />
        <path
          d="M147.7,77.3c-4.5,0.6-7.7,4.7-7.7,9.2c0,14.6,0,59.7,0,79.1c0,5-4.1,9-9,9H27c-5,0-9-4.1-9-9V61.7c0-5,4.1-9,9-9l84.4,0
		c4.8,0,9-3.6,9.3-8.4c0.3-5.2-3.8-9.6-9-9.6H9c-5,0-9,4.1-9,9v139.9c0,5,4.1,9,9,9H149c5,0,9-4.1,9-9V86.2
		C158,80.8,153.2,76.5,147.7,77.3z"
        />
      </g>
    </svg>
  )
}

External.propTypes = {
  color: PropTypes.string,
}

External.defaultProps = {
  color: "#000000",
}

export default External
