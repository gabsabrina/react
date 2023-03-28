// componentes devem comecar  com letra maiuscula para nao confundir com os proprios elementos do html
// <Header /> -> componentes
// <header /> -> htm
// em react nao se usar class e sim CLASS NAME(para nap ter confusao com o class do proprio javaascript)
// com MODULE é preciso nomear o estilo

import './Header.modules.css';
import imagemLogo from'../image/ignite-simbol.svg';



export function Header (){
    return(
        <header className='header'>
            <img src={imagemLogo} alt="imagem" />
        </header>   
    )
}