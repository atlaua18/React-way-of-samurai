export interface IProfile {
    aboutMe?: string;
    contacts?: {
        facebook: string;
        website: null;
        vk: string;
        twitter: string;
        instagram: string;
        youtube: null;
        github: string;
        mainLink: null;
    };
    lookingForAJob?: boolean;
    lookingForAJobDescription?: string;
    fullName?: string;
    userId?: number;
    photos?: {
        small?: string;
        large?: string;
    };
}
