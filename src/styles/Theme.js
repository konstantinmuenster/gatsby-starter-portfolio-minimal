import config from "../../config"

const { colors, fonts } = config

export default {
  colors: colors,
  fonts: fonts,
  breakpoints: {
    xs: "480px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
  },
  borderRadius: "1rem",
  pageWidth: "62.5rem",
  headerHeight: "6.25rem",
  footerHeight: "7.5rem",
}
