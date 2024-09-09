import cn from 'classnames'
import { IconComponent } from '@/assets/index'
import styles from './button.module.css'
import { IconButtonProps } from './button.props'

const iconSizes = {
  small: 20,
  medium: 24
} as const

export const IconButton = ({
  icon,
  count,
  size = 'medium',
  className,
  ...props
}: IconButtonProps): JSX.Element => {
  const Component = IconComponent[icon]
  return (
    <button className={cn(styles.button, className)} {...props}>
      <Component style={{ width: iconSizes[size], height: iconSizes[size] }} />
      {count && <span className={styles.count}>{count}</span>}
    </button>
  )
}
