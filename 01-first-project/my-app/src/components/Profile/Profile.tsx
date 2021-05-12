import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import styles from "./profile.module.css";

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://cdn.dribbble.com/users/1869172/screenshots/15627559/media/b77ddf94aabcff17cfb391e9dd8676aa.png?compress=1&resize=1000x750"
                    alt=""
                ></img>
            </div>
            <div>
                <img
                    className={styles.ava}
                    src="https://cdn.dribbble.com/users/2131993/screenshots/15628402/media/7bb0d27e44d8c2eff47276ae86bfd6a3.png?compress=1&resize=1000x750"
                    alt=""
                ></img>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
};
