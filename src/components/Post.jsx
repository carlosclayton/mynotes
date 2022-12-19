import {useState} from"react";
import styles from './Post.module.css'
import {Comment} from "./Comment";
import {Avatar} from "./Avatar";
import {format, formatDistanceToNow} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";




export function Post(props){
    const [comments, setComments ] = useState([
        ("Muito bom Devon, parabéns!! 👏👏")
    ]);
    const [newCommentText, setNewCommentText] = useState('')


    const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'" , {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    function handleCommentText(event) {
        setNewCommentText(event.target.value)
    }
    function handleSubmitForm(event) {
        event.preventDefault();

        setComments([...comments, newCommentText ])
        setNewCommentText('')
    }

    function onDeleteComment(content){
        const commentsWithoutDeleted = comments.filter(comment => {
            return comment !== content
        })

        setComments(commentsWithoutDeleted)
    }
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.author.avatarUrl} alt="Carlos Clayton"/>

                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {
                    props.contents.map(content => {

                        if(content.type === 'paragraph'){
                            return (
                                <p key={content.id}>{content.content}</p>
                            )
                        }else{
                            return (
                                <p key={content.id}><a href="">{content.content}</a></p>
                            )
                        }
                    })
                }

            </div>

            <form className={styles.commentForm} onSubmit={handleSubmitForm}>
                <strong>Deixe seu comentário</strong>

                <textarea
                    name="comment"
                    value={newCommentText}
                    placeholder="Deixe um comentário"
                    onChange={handleCommentText}
                />
                <footer>
                    <button type="submit" >Comentar</button>
                </footer>

            </form>

            <div className={styles.commentList}>

                {
                    comments.map(comment => {
                        return(
                            <Comment key={comment} content={comment} onDeleteComment={onDeleteComment}  />
                        )
                    })
                }

            </div>

        </article>
    )
}
