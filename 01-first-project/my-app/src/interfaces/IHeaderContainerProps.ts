export interface IHeaderContainerProps {
    id?: number | null;
    email?: string | null;
    login?: string | null; 
    isAuth?: boolean;
    // setAuthUserData: (id: number, email: string, login: string) => void;
    // authMeAPI?: {
    //     getAuthUserData(): Promise<any>;
    // }
    getAuthUserData: any;
}