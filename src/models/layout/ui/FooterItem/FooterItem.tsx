import cn from 'classnames'
import Link from 'next/link'
import { Icon } from '@/shared/ui'
import styles from './FooterItem.module.css'
import { FooterItemProps } from './FooterItem.props'

export const FooterItem = ({ icon, text, url, active }: FooterItemProps) => {
  return (
    <Link className={styles.link} href={url}>
      <div
        className={cn(styles.icon, {
          [styles.active]: active
        })}
      >
        <Icon icon={icon} />
      </div>
      <span
        className={cn(styles.text, {
          [styles.active]: active
        })}
      >
        {text}
      </span>
    </Link>
  )
}
