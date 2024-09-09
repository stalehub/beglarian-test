import { QuestionBox } from '../../models/base/ui'
import { TabSwitcher } from '@/features/layout/ui'
import { HeaderLearning } from '@/widgets/layout/ui'
import styles from './style.module.css'

export const Learning = () => {
  return (
    <div className={styles.main}>
      <HeaderLearning />
      <div className={styles.tabBox}>
        <TabSwitcher />
      </div>
      <QuestionBox />
    </div>
  )
}
