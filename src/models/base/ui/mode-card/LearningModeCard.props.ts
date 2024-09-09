import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IconType } from '@/assets/icon-type'

export interface LearningModeCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  icon: IconType
}
