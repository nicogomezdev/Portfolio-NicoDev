import styles from './Cards.module.css'
export default function Cards({children, href}){
    return(
    <section>
        <div className={styles.card}>
             <div className={styles.content}>
                {children}
            </div>
            <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.gradientButton}>
                <span className={styles.gradientText}>Github
                </span>
            </a>    
        </div>
    </section>
    );
}

