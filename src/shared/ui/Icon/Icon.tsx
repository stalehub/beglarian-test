import cn from 'classnames'
import { IconComponent } from '@/assets/index'
import styles from './Icon.module.css'
import { IconProps } from './Icon.props'

export const Icon = ({
  icon,
  size = 24,
  className,
  ...props
}: IconProps): JSX.Element => {
  const Component = IconComponent[icon]
  return (
    <Component
      style={{ width: size, height: size }}
      className={cn(styles.icon, className)}
      {...props}
    />
  )
}
