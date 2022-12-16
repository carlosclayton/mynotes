import styles from './Post.module.css'
import {Comment} from "./Comment";
import {Avatar} from "./Avatar";

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/1480579?v=4" alt="Carlos Clayton"/>

                    <div className={styles.authorInfo}>
                        <strong>Carlos Clayton</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de Dezembro às 10:20">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>
                    <a href="jane.design/doctorcare"> 👉 jane.design/doctorcare</a>
                </p>
                <p>
                    <a href="">#novoprojeto </a>
                    <a href="">#nlw </a>
                    <a href="">#rocketseat</a>
                </p>
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
