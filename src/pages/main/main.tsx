import { LearningProgressCard } from '../../models/base/ui/progress-card/LearningProgressCard'
import { LearninDashboard } from '@/features/learning/ui'
import { FooterMain, HeaderMain } from '@/widgets/layout/ui'
import styles from './style.module.css'

export const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <HeaderMain />
        <LearningProgressCard category={'B'} />
        <LearninDashboard />
      </div>
      <div className={styles.footer}>
        <FooterMain />
      </div>
    </div>
  )
}
