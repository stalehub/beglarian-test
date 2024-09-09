import { text } from '@/shared/constants'
import { IconButton } from '@/shared/ui/icon-button/button'
import styles from './header-main.module.css'

export const HeaderMain = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>{text.RAY}</h1>
      <div className={styles.boxButton}>
        <IconButton icon={'Crown'} />
        <IconButton icon={'Fire'} count={13} />
      </div>
    </div>
  )
}
