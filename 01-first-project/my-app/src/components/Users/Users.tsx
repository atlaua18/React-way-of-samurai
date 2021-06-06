import React from "react";
import { IUsersProps } from "../../interfaces/IUsersProps";
import styles from "./users.module.css";
import usersPhoto from "../../assets/images/ava.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

export let Users = (props: IUsersProps) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={styles.lineOfNum}>
                {pages.map((p) => {
                    return (
                        <span
                            className={
                                props.currentPage === p && styles.pageNum
                            }
                            onClick={() => {
                                props.onPageChanged(p);
                            }}
                        >
                            {p}
                        </span>
                    );
                })}
            </div>
            {props.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                            <img
                                src={
                                    u.photos.small !== null
                                        ? u.photos.small
                                        : usersPhoto
                                }
                                className={styles.userPhoto}
                                alt=""
                            />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? (
                                <button
                                    onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "7401ed9e-1c60-4295-afe1-3df38f8b677b",
                                            }
                                        }).then(response => {
                                            if(response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                        });
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "7401ed9e-1c60-4295-afe1-3df38f8b677b",
                                            }
                                        }).then(response => {
                                            if(response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                        });
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
