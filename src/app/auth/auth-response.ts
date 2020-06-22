export interface AuthResponse {
    user: {
        id: number,
        access_token: string,
        expires_in: number
    };
// tslint:disable-next-line:eofline
}