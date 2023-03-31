import styles from './Comment.module.css'

export function Comment(){
    return(
        <div  className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/122915985?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}></div>

                <footer>aplaudir</footer>
            </div>
        </div>
    )
}