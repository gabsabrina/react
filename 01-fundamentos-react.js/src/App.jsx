import {Post} from './Post' // -> para named exports
//import Post from './Post' -> para default exports

// COMPONENTE(no react) -> uma funcao que retorna um HTML
// todos os componentes deve ter extensao JSX -> JavaScript + xml(HTML)

export function App() {

  return ( 
    <div> {/* nao pode ter varios componentes soltos (abaixo um do outro) sem um maior englobando todos */}
    {/* PROPRIEDADES -> ex: author, content*/}
      <Post 
        author = 'gabi sabrina' 
        content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione molestias dignissimos cumque? Tempora quae velit consectetur excepturi sapiente quisquam consequuntur iste asperiores! Facilis, nobis veritatis fugit reprehenderit consequatur porro cum?'
      />
      <Post author = 'victor ' content = 'mais um post'/>
    </div>
  )
}

//default exports ->
//export default App  

