import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar";

export function Comment(props){
    function handleDeleteComment(){
        props.onDeleteComment(props.content)
    }
    return(
        <div className={styles.comment}>
            <Avatar src="https://avatars.githubusercontent.com/u/10347617?v=4" alt="Andrey Helldar"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorTime}>
                            <strong>Andrey Helldar</strong>
                            <time title="11 de Dezembro às 10:20">Publicado há 1h</time>
                        </div>

                        <button
                            onClick={handleDeleteComment}
                            title="Deletar comentário"
                        >
                            <Trash size={20}></Trash>
                        </button>
                    </header>

                    <p>{ props.content } </p>
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
