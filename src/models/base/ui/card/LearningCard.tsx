import cn from 'classnames'
import { IconCircle } from '@/shared/ui'
import styles from './LearningCard.module.css'
import { LearningCardProps } from './LearningCard.props'

export const LearningCard = ({
  icon,
  title,
  color,
  className,
  ...props
}: LearningCardProps) => {
  return (
    <div className={cn(styles.card, className)} {...props}>
      <IconCircle icon={icon} color={color} />
      <span className={styles.title}>{title}</span>
    </div>
  )
}
