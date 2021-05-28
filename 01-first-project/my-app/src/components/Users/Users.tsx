import React from "react";
import { IUsersProps } from "../../interfaces/IUsersProps";
import styles from "./users.module.css";

export const Users = (props: IUsersProps) => {

    if (props.users.length === 0) {
        debugger
        props.setUsers([
            {
                id: 1,
                avatarURL:
                    "https://cdn.dribbble.com/users/15779/screenshots/15722163/media/e93bd27868f6d3d1cef98e7c833b2a90.png?compress=1&resize=1600x1200",
                followed: true,
                fullName: "Nastya",
                status: "I'm a boss",
                location: { city: "Saint-Petersburg", country: "Russia" },
            },
            {
                id: 2,
                avatarURL:
                    "https://cdn.dribbble.com/users/15779/screenshots/15722163/media/e93bd27868f6d3d1cef98e7c833b2a90.png?compress=1&resize=1600x1200",
                followed: false,
                fullName: "Vitaliq",
                status: "Nastya a boss",
                location: { city: "Saint-Petersburg", country: "Russia" },
            },
            {
                id: 3,
                avatarURL:
                    "https://cdn.dribbble.com/users/15779/screenshots/15722163/media/e93bd27868f6d3d1cef98e7c833b2a90.png?compress=1&resize=1600x1200",
                followed: true,
                fullName: "Dmitry",
                status: "Nastya a boss",
                location: { city: "Minsk", country: "Belarus" },
            },
        ]);
    }

    return (
        <div>
            {props.users.map( (u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={u.avatarURL}
                                className={styles.userPhoto}
                                alt=""
                            />
                        </div>
                        <div>
                            {u.followed ? (
                                <button
                                    onClick={() => {
                                        props.unfollow(u.id);
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        props.follow(u.id);
                                    }}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};
