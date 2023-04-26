import { Header } from './componentes/header'
import {Post} from './componentes/Post' // -> para named exports
//import Post from './Post' -> para default exports
import { Sidebar } from './componentes/Sidebar'

import './global.css'

import styles from'./app.module.css'

// COMPONENTE(no react) -> uma funcao que retorna um HTML
// todos os componentes devem ter extensao JSX -> JavaScript + xml(HTML)

//author: {avatar_URL:'', name:'', role:''}
//publisheAt: Date
//content: String

// {' '}  para add um espaco é necessario {} e uma string vazia ' '  

const posts = [
  {
    id:1,
    author:{
      avatarUrl:'https://avatars.githubusercontent.com/u/122915985?v=4',
      name:'gabrielle sabrina',
      role:'CTO @Rocketseat',
    },
    content: //nao trazer html direto
    [
      {type:'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'👉 jane.design/doctorcare '},
    ],
    publishedAt: new Date('2023-04-17 15:00:00')

  },
  {
    id:2,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/122915985?v=4',
      name:'victor cardoso',
      role:'Educador @Rocketseat',
    },
    content: //nao trazer html direto
    [
    {type:'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content:'👉 jane.design/doctorcare '},
    ],
    publishedAt: new Date('2023-04-10 15:00:00')
  },


]

//posts.forEach - percorre o array mas nao tem retorno
//posts.map - percorre o array e exibe um retorno

export function App() {

  return ( 
    <div> {/* nao pode ter varios componentes soltos (abaixo um do outro) sem um maior englobando todos */}
    {/* PROPRIEDADES -> ex: author, content*/}
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
      <main> {/*ITERANDO  com MAP -estrutura de repetiçao, percorre o array e para cada posiçao faça...*/}
        {posts.map(post => {
          return (
            <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
    </div>
    </div>
  )
}

//default exports ->
//export default App  

