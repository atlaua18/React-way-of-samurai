import React from "react";
import styles from "./post.module.css";

export const Post = (props: { message: string, likesCount: number }) => {
    return (
        <div>
            <div className={styles.item}>
                <img
                    src="https://cdn.dribbble.com/users/5438117/screenshots/15635046/media/66d0cfcb493361b7e2b838b6235c804b.jpg?compress=1&resize=1000x750"
                    alt=""
                ></img>
                {props.message}
                <div>
                    <span className={styles.likes}>
                        {props.likesCount} 
                        <img
                            src="https://p7.hiclipart.com/preview/540/262/503/social-media-facebook-like-button-heart-emoticon-facebook-live-love-png.jpg"
                            alt=""
                        ></img>
                    </span>
                </div>
            </div>
        </div>
    );
};
