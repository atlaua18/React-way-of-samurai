import styles from "./message.module.css";

export const Message = (props: { message: string | undefined }) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    );
};

// ТУТ СОЗДАЕТСЯ ВСЕГДА КАЖДЫЙ РАЗ НОВОЕ СООБЩЕНИЕ (ОДНО)
