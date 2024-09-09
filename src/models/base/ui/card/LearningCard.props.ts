import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IconType } from '@/assets/icon-type'

export interface LearningCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  icon: IconType
  color: 'red' | 'purple'
}
