export interface IUsers {
    id: number;
    photos: {
        small: string,
        large: string
    };
    followed: boolean;
    name: string;
    status: string;
    location: { city: string; country: string };
}
