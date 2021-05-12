import styles from "./message.module.css";

export const Message = (props: {message:string}) => {
    return (
        <div className={styles.message}>{props.message}</div>
    );
}