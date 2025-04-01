// components/LottieAnimation.tsx
'use client'

import { useEffect, useRef } from 'react'
import type { AnimationItem } from 'lottie-web'

interface LottieAnimationProps {
  animationData: unknown
  loop?: boolean
  autoplay?: boolean
  className?: string
}

export const LottieAnimation = ({
  animationData,
  loop = true,
  autoplay = true,
  className
}: LottieAnimationProps) => {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let anim: AnimationItem | null = null

    const loadAnimation = async () => {
      const lottie = (await import('lottie-web')).default
      
      if (container.current) {
        anim = lottie.loadAnimation({
          container: container.current,
          renderer: 'svg',
          loop,
          autoplay,
          animationData
        })
      }
    }

    loadAnimation()

    return () => {
      anim?.destroy()
    }
  }, [animationData, loop, autoplay])

  return <div ref={container} className={className} />
}