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
        'Post muito Bacana, show'
    ])

    const[newCommentText, setNewCommentText] = useState('')

    const publishedDateFormat =  format(publishedAt, "d 'de' LLLL 'às' HH:mm 'h'", {
        locale: ptBR
    })
    
    const publishedDateRelativeNow = formatDistanceToNow(publishedAt,{ // compara a data com o dia que foi publicado e add o prefixo'há'
        locale:ptBR,
        addSuffix:true,
    })

    function handleCreatNewComment(){ //funçao disparada com açao do usuario(padrao comecar com handle)
        event.preventDefault() // evita o default do react de redirecionar para outra pag
        const newCommentText = event.target.comment.value
        
        //passe( os que tinha + novos) um novo valor
        // add comentarios
        setComments([...comments, newCommentText])
    }

    function handleCreatNewComment(){
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value)
    }

    function deleteComment(comment){
        console.log(`Deletar comentário ${comment}`)
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
                            //key- sempre no primeiro elemento depois do retorno
                            return <p key={linha.content}>{linha.content}</p>
                        } else if (linha.type === 'link'){
                            return <p key={linha.content}><a href=''>{linha.content}</a></p>
                        }
                    })}
                </div>
                    <form onSubmit={handleCreatNewComment} className={styles.commentForm}>
                        <strong>Deixe seu feedback</strong>

                        <textarea 
                        name='comment'
                        placeholder='Deixe um comentario'
                        value={newCommentText}
                        onChange={handleNewCommentChange}>
                        </textarea>

                        <footer>
                            <button type='submit'>Publicar</button>
                        </footer>
                    </form>
                    <div className={styles.commentList}>
                        {comments.map(comment =>{
                            return (
                                <Comment
                                key={comment}
                                content={comment}
                                onDeleteComment={deleteComment} // CHAMANDO UMA FUNÇAO COMO PROPRIEDADE
                                />
                            )
                        })}
                    </div>
        </article>
    )
}



//key- quando um componente é renferizado novamente no Reac
// sendo os 3 principais momentos
// 1.quando o estado altera
// 2.quando a propriedade altera
// 3.quando o componente pais renderiza novamente
// pq nao usar o indice do array como key?


