import { environtment } from "../../global";
import { CreateUser } from "../models/CreateUser";
import { LoginUser } from "../models/LoginUser";


export const signupUser = async (data: CreateUser): Promise<any> => {
    const responseRaw = await fetch(`${environtment.url}${environtment.auth.signup}`, generateRequestInit(data, 'POST'));
    const responseJSON = await responseRaw.json();
    return responseJSON;
}

export const loginUser = async (data: LoginUser): Promise<any> => {
    const responseRaw = await fetch(`${environtment.url}${environtment.auth.login}`, generateRequestInit(data, 'POST'));
    const responseJSON = await responseRaw.json();
    return responseJSON;
}

export const generateRequestInit = (data: any, method: string): RequestInit => {
    const headers: HeadersInit = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const opts: RequestInit = {
        method,
        body: JSON.stringify(data),
        headers
    };
    return opts;
}