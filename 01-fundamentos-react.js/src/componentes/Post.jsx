import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'


export function Post({author, publishedAt,content}){
    
    //ESTADO: varias que eu quero que o componente monitore
    //como UseState retorna um array pode desestruturar (usar array do outro lado da operaçao)
    //funçao para alterar o valor dessa var e avisar o react quando for alterado
    const [comments, setComments]= useState([ 
        1,
        2,
    ])

    const publishedDateFormat =  format(publishedAt, "d 'de' LLLL 'às' HH:mm 'h'", {
        locale: ptBR
    })
    
    const publishedDateRelativeNow = formatDistanceToNow(publishedAt,{ // compara a data com o dia que foi publicado e add o prefixo'há'
        locale:ptBR,
        addSuffix:true,
    })

    function handleCreatNewComment(){ //funçao disparada com açao do usuario(padrao comecar com handle)
        event.preventDefault() // evita o default do react de redirecionar para outra pag
        
        //passe( os que tinha + novos) um novo valor
        // add comentarios
        setComments([...comments, comments.length + 1])
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar harborder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span> 
                    </div>
                </div>
                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}> {/*etorna uma string no formato ISO estendido simplificado  */}
                    {publishedDateRelativeNow}
                </time>
            </header>
                <div className={styles.content}>
                    {content.map(linha => {
                        if(linha.type === 'paragraph'){
                            return <p>{linha.content}</p>
                        } else if (linha.type === 'link'){
                            return <p><a href=''>{linha.content}</a></p>
                        }
                    })}
                </div>
                    <form onSubmit={handleCreatNewComment} className={styles.commentForm}>
                        <strong>Deixe seu feedback</strong>

                        <textarea placeholder='Deixe um comentario'></textarea>

                        <footer>
                            <button type='submit'>Publicar</button>
                        </footer>
                    </form>
                    <div className={styles.commentList}>
                        {comments.map(comment =>{
                            return <Comment/>
                        })}
                    </div>
        </article>
    )
}