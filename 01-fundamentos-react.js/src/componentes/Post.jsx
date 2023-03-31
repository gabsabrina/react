import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar}
                    src="https://avatars.githubusercontent.com/u/122915985?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Gabrielle Sabrina</strong>
                        <span>web developer</span>
                    </div>
                </div>
                <time title='03 de março ás 17:05h'dateTime='2023-03-30 17:05:00'>Publicado há 1h</time>
            </header>
                <div className={styles.content}>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p>👉{' '}<a href='#'> jane.design/doctorcare</a> </p>
                    <p> 
                        <a href='#'> #novoprojeto </a>{' '} {/* para add um espaco é necessario {} e uma string vazia ' '  */}
                        <a href="#">#nlw</a>{' '}
                        <a href="#">#rocketseat </a>
                    </p>

                    <form className={styles.commentForm}>
                        <strong>Deixe seu feedback</strong>

                        <textarea placeholder='Deixe um comentario'></textarea>

                        <footer>
                            <button type='submit'>Publicar</button>
                        </footer>
                    </form>
                </div>
        </article>
    )
}