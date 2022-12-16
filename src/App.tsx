import './global.css'
import  styles from './App.module.css'

// @ts-ignore
import {Header} from './components/Header.jsx'
// @ts-ignore
import {Sidebar} from './components/Sidebar.jsx'

// @ts-ignore
import {Post} from './components/Post.jsx'

function App() {
  return (
    <div>
      <Header />
        <div className={styles.wrapper}>
            <Sidebar />
            <main>
                <Post />
                <Post />
            </main>
        </div>
    </div>
  )
}

export default App
