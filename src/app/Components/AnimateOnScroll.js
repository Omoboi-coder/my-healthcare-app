'use client'
import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    )

    const node = ref.current
    if (node) {
      observer.observe(node)
    }

    return () => {
      if (node) {
        observer.unobserve(node)
      }
    }
  }, [])

  return { ref, isVisible }
}

export const AnimateOnScroll = ({ children, delay = 0, direction = 'up' }) => {
  const { ref, isVisible } = useScrollAnimation()
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const getTransform = () => {
    switch(direction) {
      case 'up': return 'translateY(50px)'
      case 'down': return 'translateY(-50px)'
      case 'left': return 'translateX(50px)'
      case 'right': return 'translateX(-50px)'
      default: return 'translateY(50px)'
    }
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible || hasLoaded ? 1 : 0,
        transform: isVisible || hasLoaded ? 'translate(0)' : getTransform(),
        transition: `all 0.8s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}