import { IProfile } from "../../../interfaces/IProfile";
import { Loader } from "../../Loader/Loader";
import styles from "./profileinfo.module.css"

export const ProfileInfo = (props: {profile: IProfile | null}) => {
    debugger
    if(!props.profile) {
        return <Loader />
    };
    debugger
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
                <div className={styles.descriptionBlock}>description</div>
            </div>
        </div>
    );
};
