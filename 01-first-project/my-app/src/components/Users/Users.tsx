import axios from "axios";
import React from "react";
import { IUsersProps } from "../../interfaces/IUsersProps";
import styles from "./users.module.css";
import usersPhoto from "../../assets/images/ava.png";

export const Users = (props: IUsersProps) => {

    if (props.users.length === 0) {
        axios({

        })
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => { //{params: {count: 40}}
            props.setUsers(response.data.items)
        });
    }

    return (
        <div>
            {props.users.map( (u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={ u.photos.small !== null ? u.photos.small : usersPhoto}
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
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};
