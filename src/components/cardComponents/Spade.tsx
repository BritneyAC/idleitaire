import styles from '@/styles/css/Cards.module.css'

export default function Spade() {
  return (
    <div className={styles.spade}>
      <div className={styles.suitPositioner}>
        <div className={styles.spadeLeft} />
        <div className={styles.spadeRight} />
        <div className={styles.spadeBottom} />
      </div>
    </div>
  )
}