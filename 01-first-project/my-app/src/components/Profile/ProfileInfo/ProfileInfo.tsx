import { IProfile } from "../../../interfaces/IProfile";
import { Loader } from "../../Loader/Loader";
import usersPhoto from "../../../assets/images/ava.png";
import styles from "./profileinfo.module.css";

export const ProfileInfo = (props: { profile: IProfile | null }) => {
    
    if (!props.profile) {
        return <Loader />;
    }

    return (
        <div>
            <div className={styles.ProfileBanner}>
                <img
                    src="https://cdn.dribbble.com/users/1869172/screenshots/15627559/media/b77ddf94aabcff17cfb391e9dd8676aa.png?compress=1&resize=1000x750"
                    alt=""
                ></img>
            </div>
            <div className={styles.userInfo}>
                <img
                    className={styles.ava}
                    src={props.profile.photos?.large !== null ? props.profile.photos?.large : usersPhoto}
                    alt=""
                ></img>
                <div className={styles.descriptionBlock}>
                    <div>
                        <span className={styles.descriptionItem}>Имя: </span>
                        {props.profile.fullName ? props.profile.fullName : null}
                    </div>
                    <div>
                        <span className={styles.descriptionItem}>
                            Про меня:{" "}
                        </span>
                        {props.profile.aboutMe ? props.profile.aboutMe : null}
                    </div>
                    <div>
                        <span className={styles.descriptionItem}>
                            Контакты:
                        </span>
                        <div>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={props.profile.contacts?.facebook}
                            >
                                {props.profile.contacts?.facebook
                                    ? props.profile.contacts?.facebook
                                    : null}
                            </a>
                        </div>
                        <div>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={props.profile.contacts?.website}
                            >
                                {props.profile.contacts?.website
                                    ? props.profile.contacts?.website
                                    : null}
                            </a>
                        </div>
                        <div>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={props.profile.contacts?.vk}
                            >
                                {props.profile.contacts?.vk
                                    ? props.profile.contacts?.vk
                                    : null}
                            </a>
                        </div>
                        <div>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={props.profile.contacts?.twitter}
                            >
                                {props.profile.contacts?.twitter
                                    ? props.profile.contacts?.twitter
                                    : null}
                            </a>
                        </div>
                        <div>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={props.profile.contacts?.instagram}
                            >
                                {props.profile.contacts?.instagram
                                    ? props.profile.contacts?.instagram
                                    : null}
                            </a>
                        </div>
                        <div>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={props.profile.contacts?.youtube}
                            >
                                {props.profile.contacts?.youtube
                                    ? props.profile.contacts?.youtube
                                    : null}
                            </a>
                        </div>
                        <div>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={props.profile.contacts?.github}
                            >
                                {props.profile.contacts?.github
                                    ? props.profile.contacts?.github
                                    : null}
                            </a>
                        </div>
                        <div>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={props.profile.contacts?.mainLink}
                            >
                                {props.profile.contacts?.mainLink
                                    ? props.profile.contacts?.mainLink
                                    : null}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
