"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

type ResponsiveImageProps = {
  src: string
  alt: string
  className?: string
  priority?: boolean
  type?: 'background' | 'content' | 'card'
  width?: number
  height?: number
  fill?: boolean
  sizes?: string
}

export function ResponsiveImage({
  src,
  alt,
  className = '',
  priority = false,
  type = 'content',
  width,
  height,
  fill = false,
  sizes = '100vw',
  ...props
}: ResponsiveImageProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Vérifier si l'écran est de taille mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Vérifier au chargement initial
    checkIfMobile()

    // Ajouter un écouteur d'événement pour le redimensionnement
    window.addEventListener('resize', checkIfMobile)

    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  // Déterminer la classe mobile appropriée en fonction du type d'image
  const mobileClass = isMobile
    ? type === 'background'
      ? 'mobile-bg-image'
      : type === 'card'
      ? 'mobile-card-image'
      : 'mobile-content-image'
    : ''

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      priority={priority}
      sizes={sizes}
      className={`${className} ${mobileClass}`}
      {...props}
    />
  )
}
