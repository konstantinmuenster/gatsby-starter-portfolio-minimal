import { useState, useEffect } from "react"

// https://usehooks.com/useOnScreen/

export default (ref, threshold = 0.25) => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
      }
    )
    if (element) {
      setTimeout(() => observer.observe(element), 3500)
    }
    return () => {
      observer.unobserve(element)
    }
  }, [ref, threshold])
  return isIntersecting
}
