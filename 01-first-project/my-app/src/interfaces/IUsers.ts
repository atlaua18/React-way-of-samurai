export interface IUsers {
    id: number;
    avatarURL: string;
    followed: boolean;
    fullName: string;
    status: string;
    location: { city: string; country: string };
}
