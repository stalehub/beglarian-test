'use client'
import { useLearningStore } from '../../model/learning-store'
import { QuestionItem } from '@/features/learning/ui'
import styles from './QuestionBox.module.css'

export const QuestionBox = () => {
  const questions = useLearningStore((state) => state.questions)
  const toggleQuestion = useLearningStore((state) => state.toggleQuestion)

  return (
    <div className={styles.box}>
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          number={question.id}
          isChecked={question.passed}
          onClick={toggleQuestion}
        />
      ))}
    </div>
  )
}
