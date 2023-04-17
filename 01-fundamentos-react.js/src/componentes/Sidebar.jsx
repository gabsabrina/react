import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1602498456745-e9503b30470b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHVycGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=50"
            />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/122915985?v=4" />
                <strong>Gabrielle Sabrina</strong>
                <span>web developer</span>
            </div>
            <footer>                                 
                
                <a href="#">
                <PencilLine  size={20}/>
                Editar seu perfil</a>
            </footer>
        </aside>
    )
}