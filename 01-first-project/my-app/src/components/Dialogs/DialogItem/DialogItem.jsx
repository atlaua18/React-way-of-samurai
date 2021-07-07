import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./dialogitem.module.css";

export const DialogItem = (props) => {
    let path = "/dialogs/" + props.Id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path} className={styles.nameLinks} activeClassName={styles.active}>
                <img src={props.AVA} alt=""></img>
                {props.N}
            </NavLink>
        </div>
    );
};
