import React from "react";
import axios from "axios";
import { IUsersProps } from "../../interfaces/IUsersProps";
import styles from "./users.module.css";
import usersPhoto from "../../assets/images/ava.png";

export class Users extends React.Component<IUsersProps> {
    
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                //{params: {count: 40}}
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    onPageChanged = (pageNum: number) => {
        this.props.setCurrentPage(pageNum);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then((response) => {
                //{params: {count: 40}}
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                {/* <button onClick={this.getUsers}>Show users</button> */}
                <div>
                    {pages.map( p => {
                        return <span className={this.props.currentPage === p && styles.pageNum}
                        onClick = { () => { this.onPageChanged(p) } }>{p}</span>
                    })}
                </div>
                {this.props.users.map((u) => (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img
                                    src={
                                        u.photos.small !== null
                                            ? u.photos.small
                                            : usersPhoto
                                    }
                                    className={styles.userPhoto}
                                    alt=""
                                />
                            </div>
                            <div>
                                {u.followed ? (
                                    <button
                                        onClick={() => {
                                            this.props.unfollow(u.id);
                                        }}
                                    >
                                        Unfollow
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            this.props.follow(u.id);
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
    }
}
