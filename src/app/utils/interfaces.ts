export interface DataLogin {
    username: any
    password: any
}
export interface DataRegister {
    email: string | undefined | null;
    name: string | undefined | null;
    username: string | undefined | null;
}
export interface ConfirmationEmail {
    username: string | undefined | null;
    password: string | undefined | null;
    new_password: string | undefined | null;
}
