import { IProfile } from "./IProfile";

export interface IProfileContainerProps {
    profile: IProfile | null,
    setUserProfile: (profile: {}) => void;
    // userId: number;
}