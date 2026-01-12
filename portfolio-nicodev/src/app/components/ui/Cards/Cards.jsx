import styles from './Cards.module.css'
export default function Cards({ children, href, className }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.content}>{children}</div>
      <a href={href} target="_blank" rel="noopener noreferrer"
         className={styles.gradientButton}>
        <span className={styles.gradientText}>Github</span>
      </a>
    </div>
  );
}

