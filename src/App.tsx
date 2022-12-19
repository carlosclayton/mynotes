import './global.css'
import  styles from './App.module.css'

// @ts-ignore
import {Header} from './components/Header.jsx'
// @ts-ignore
import {Sidebar} from './components/Sidebar.jsx'

// @ts-ignore
import {Post} from './components/Post.jsx'


const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://avatars.githubusercontent.com/u/1480579?v=4',
            name: 'Carlos Clayton',
            role: 'Web Developer'
        },
        contents: [
            {id: 1, type: 'paragraph', content: 'Fala galeraa 👋'},
            {id: 2, type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {id: 3, type: 'paragraph', content: 'Fala galeraa 👋'},
            {id: 4, type: 'link', content: 'jane.design/doctorcare'},
            {id: 5, type: 'link', content: '#novoprojeto'},
        ],
        publishedAt: new Date('2022-05-03 20:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://avatars.githubusercontent.com/u/10347617?v=4',
            name: 'Andrey Helldar',
            role: 'Web Developer'
        },
        contents: [
            {id: 1, type: 'paragraph', content: 'Fala galeraa 👋'},
            {id: 2, type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {id: 3, type: 'paragraph', content: 'Fala galeraa 👋'},
            {id: 5, type: 'link', content: '#novoprojeto'},
            {id: 6, type: 'link', content: '#nlw '},
            {id: 7, type: 'link', content: '#rocketseat'}

        ],
        publishedAt: new Date('2022-06-03 10:50:00')
    }
]

function App() {
  return (
    <div>
      <Header />
        <div className={styles.wrapper}>
            <Sidebar />
            <main>
                {
                    posts.map(post => {
                        return (
                            <Post key={post.id}
                            author={post.author}
                            contents={post.contents}
                            publishedAt={post.publishedAt}
                            />
                        )
                    } )
                }

            </main>
        </div>
    </div>
  )
}

export default App
