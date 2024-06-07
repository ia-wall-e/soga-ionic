export interface LoginCredentials{
    uid:string,
    name:string,
    email:string,
    password:string,
}

export interface RegisterCredentials{
    uid?:string,
    email:string,
    phone: number,
    password:string,
    checkTerm: boolean
}

export interface UserCredentials{
    uid:string,
    name:string,
    email:string,
    phone?:number,
    img:string,
    metadata?:{},
    location?:{}
}