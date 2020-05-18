import React from "react"
import PropTypes from "prop-types"

const Xing = ({ color }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      fill={color}
      x="0px"
      y="0px"
      viewBox="250 -250 1000 1000"
    >
      <g>
        <path
          d="M862.8,740L643.7,355.8L983.8-240h229L872.6,355.8L1091.8,740H862.8z M503.1,443.7l170.1-280L545.6-60.9H329.7
            l127.5,224.6l-170.1,280H503.1z"
        />
      </g>
    </svg>
  )
}

Xing.propTypes = {
  color: PropTypes.string,
}

Xing.defaultProps = {
  color: "#000000",
}

export default Xing
