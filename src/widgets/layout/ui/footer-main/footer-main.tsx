import { FooterItem } from '../../../../models/layout/ui'
import { text } from '@/shared/constants'
import styles from './footer.module.css'

export const FooterMain = () => {
  return (
    <div className={styles.footer}>
      <FooterItem text={text.HOME} icon={'Home'} url={'/'} active />
      <FooterItem text={text.PLAN} icon={'Route'} url={'/'} active={false} />
      <FooterItem
        text={text.LEADERBOARD}
        icon={'Ranking'}
        url={'/'}
        active={false}
      />
      <FooterItem text={text.PROFILE} icon={'User'} url={'/'} active={false} />
    </div>
  )
}
