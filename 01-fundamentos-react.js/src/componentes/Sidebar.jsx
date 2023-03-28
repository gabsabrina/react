import styles from './Siderbar.module.css'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1602498456745-e9503b30470b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHVycGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=50" />
            <div className={styles.profile}>
                <strong>Gabrielle Sabrina</strong>
                <span>web developer</span>
            </div>
            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>
        </aside>
    )
}