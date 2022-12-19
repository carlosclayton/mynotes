

import styles from './Post.module.css'
import {Comment} from "./Comment";
import {Avatar} from "./Avatar";
import {format, formatDistanceToNow} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function Post(props){
    const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'" , {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
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
                                <p>{content.content}</p>
                            )
                        }else{
                            return (
                                <p><a href="">{content.content}</a></p>
                            )
                        }
                    })
                }

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea placeholder="Deixe um comentário" />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>

        </article>
    )
}
