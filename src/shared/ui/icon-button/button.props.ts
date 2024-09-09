import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { IconType } from '@/assets/index'

export interface IconButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: IconType
  count?: number
  size?: 'small' | 'medium'
}
