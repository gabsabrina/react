import styles from './Avatar.module.css'

export function Avatar({hasBorder = true, src}){
    /*condition ? true : false. */

    return(
        <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src} />
    )
} 