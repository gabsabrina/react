// propriedades = {author:'',content''}, VEM COMO OBJETO
// named exports ->
export function Post(propriedades){
    //return<p>Post</p>
    return (
    <div>
    <strong>{propriedades.author}</strong> {/*para exibir o valor de uma variavel javascript dentro de um html é necessario {} */} 
    <p>{propriedades.content}</p>
    </div>
    ) 
    
}


// default exports ->
//export default Post
