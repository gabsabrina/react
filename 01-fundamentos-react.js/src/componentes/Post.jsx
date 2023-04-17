import {format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(author, publishedAt){
    const publishedDateFormat = format (publishedAt, "03 de março ás 17:05h",{
        locale: ptBR,
    })

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasborder src={author.avatarURL} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span> 
                    </div>
                </div>
                <time title='03 de março ás 17:05h'dateTime='2023-04-16 17:05:00'>
                    {publishedDateFormat} 
                </time>
            </header>
                <div className={styles.content}>

                </div>
                    <form className={styles.commentForm}>
                        <strong>Deixe seu feedback</strong>

                        <textarea placeholder='Deixe um comentario'></textarea>

                        <footer>
                            <button type='submit'>Publicar</button>
                        </footer>
                    </form>
                    <div className={styles.commentList}>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                    </div>
        </article>
    )
}