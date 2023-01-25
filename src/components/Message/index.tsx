import styles from './Message.module.css'

export interface MessageProps {
    message?: string
    loading: boolean
    error: boolean
}

const Message = (props: MessageProps) => {
    if (props.error) return <h2 className={styles.message}>Error al cargar</h2>
    if (props.loading) return <h2 className={styles.message}>Cargando...</h2>
    
    return <h2 className={styles.message}>{props.message}</h2>
}

export default Message
