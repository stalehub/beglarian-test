'use client'

import Link from 'next/link'
import { useLearningStore } from '../../model/learning-store'
import { text } from '@/shared/constants'
import { misc } from '@/shared/helpers'
import { Icon, IconCircle, Loader } from '@/shared/ui'
import styles from './LearningProgressCard.module.css'
import { LearningProgressCardProps } from './LearningProgressCard.props'

export const LearningProgressCard = ({
  category
}: LearningProgressCardProps) => {
  const [progress, totalQuestions] = useLearningStore((state) =>
    state.getProgress()
  )
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles['header-block']}>
          <IconCircle
            icon={'GraduationCap'}
            color={'contrast-secondary'}
            sizeCircle={'medium'}
          />
          <div className={styles.info}>
            <h3 className={styles.title}>{text.LEARNING}</h3>
            <p className={styles.category}>{`${text.CATEGORY} ${category}`}</p>
          </div>
        </div>
        <Link href="/learning" className={styles.arrow}>
          <Icon icon={'Right'} color={'contrast'} />
        </Link>
      </div>
      <p className={styles.questions}>
        {progress} {text.QUESTIONS_OUT} {totalQuestions} {text.PASSED}
      </p>
      <div className={styles.progress}>
        <Loader filledCount={misc(totalQuestions, progress)} />
      </div>
    </div>
  )
}
