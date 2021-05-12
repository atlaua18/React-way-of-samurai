import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./dialogitem.module.css";

export const DialogItem = (props: {name:string, id:number}) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path} activeClassName={styles.active}>
                {props.name}
            </NavLink>
        </div>
    );
};
