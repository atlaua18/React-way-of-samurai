import { IProfile } from "../../../interfaces/IProfile";
import { Loader } from "../../Loader/Loader";
import styles from "./profileinfo.module.css";

export const ProfileInfo = (props: { profile: IProfile | null }) => {
    debugger;
    if (!props.profile) {
        return <Loader />;
    }
    debugger;
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
                    // src="https://cdn.dribbble.com/users/2131993/screenshots/15628402/media/7bb0d27e44d8c2eff47276ae86bfd6a3.png?compress=1&resize=1000x750"
                    src={props.profile.photos?.large}
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
