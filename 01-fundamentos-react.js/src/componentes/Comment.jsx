import { ThumbsUp,Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import {Avatar} from './Avatar'

export function Comment({content,onDeleteComment}){
    function handleDeleteComment(){
        onDeleteComment(content)
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false}  src="https://avatars.githubusercontent.com/u/122915985?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                 <header>
                    <div className={styles.authorAndTime}>
                        <strong>Gabrielle Sabrina</strong>
                        <time title='4 de abril ás 16:02' dateTime='2023-04-04'>Cerca de 2h atrás</time>
                    </div>
                    <button onClick={handleDeleteComment}title='Deletar Comentario'>
                        <Trash size={24}/>
                    </button>
                    </header>
                
                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                            Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}