"use server";
import bcrypt from 'bcrypt';

export default async function encrypt(text: string){
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(text, salt);
    return hash;
}