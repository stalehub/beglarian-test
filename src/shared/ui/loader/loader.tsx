'use client'
import cn from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from './loader.module.css'
import { LoaderProps } from './loader.props'

export const Loader = ({
  filledCount,
  className,
  ...props
}: LoaderProps): JSX.Element => {
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(false), filledCount * 300 + 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className={cn(styles.loader, className)} {...props}>
      {[...new Array(7)].map((_, index) => (
        <div
          key={index}
          className={`${styles.cell} ${index < filledCount && animate ? styles.animatedCell : ''}`}
          style={{
            opacity: index < filledCount && !animate ? 1 : 0.1,
            animationDelay: `${index * 0.3}s`
          }}
        ></div>
      ))}
    </div>
  )
}
