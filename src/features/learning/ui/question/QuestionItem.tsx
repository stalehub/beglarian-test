import cn from 'classnames'
import { Icon } from '@/shared/ui'
import styles from './QuestionItem.module.css'
import { QuestionItemProps } from './QuestionItem.props'

export const QuestionItem = ({
  number,
  isChecked,
  onClick,
  className,
  ...props
}: QuestionItemProps) => {
  return (
    <div
      onClick={() => onClick(number)}
      className={cn(styles.item, className)}
      {...props}
    >
      <span className={styles.number}>{number}</span>
      {isChecked && (
        <span className={styles.icon}>
          <Icon icon={'CheckCircle'} size={20} />
        </span>
      )}
      <div className={styles.moonShape}></div>
    </div>
  )
}
