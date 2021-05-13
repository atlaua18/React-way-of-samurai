import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./dialogitem.module.css";

export const DialogItem = (props: {
    id: number;
    name: string;
    avatar: string;
}) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path} className={styles.nameLinks} activeClassName={styles.active}>
                <img src={props.avatar} alt=""></img>
                {props.name}
            </NavLink>
        </div>
    );
};
