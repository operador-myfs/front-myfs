export interface DataLogin {
    username: any
    password: any
}
export interface DataRegister {
    name: string | undefined | null;
    username: string | undefined | null;
    cedula: string | undefined | null;
    address: string | undefined | null;
}
export interface ConfirmationEmail {
    username: string | undefined | null;
    password: string | undefined | null;
    new_password: string | undefined | null;
}

export interface DataTransfer {
    citizenName: string | undefined | null;
    citizenEmail: string | undefined | null;
    transferAPIURL: string | undefined | null;
}   
