import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar";
import {useState} from "react";

export function Comment(props){
    const [likesCount, setLikesCount] = useState(0)
    function handleLikesCount(){
        setLikesCount(likesCount + 1)
    }

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
                    <button onClick={handleLikesCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likesCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
