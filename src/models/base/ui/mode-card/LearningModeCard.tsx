import cn from 'classnames'
import { IconCircle } from '@/shared/ui'
import styles from './LearningModeCard.module.css'
import { LearningModeCardProps } from './LearningModeCard.props'

export const LearningModeCard = ({
  icon,
  title,
  className,
  ...props
}: LearningModeCardProps) => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      <IconCircle icon={icon} color={'contrast'} sizeCircle={'medium'} />
      <span className={styles.title}>{title}</span>
    </div>
  )
}
