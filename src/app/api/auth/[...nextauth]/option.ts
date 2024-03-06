import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    // callbacks: {
    //     async signIn({user, account, profile}) {
    //         prisma.user.create({
    //             data: {
    //                 email: user.email
    //             }
    //         })
    //         console.log("Login Added")
    //         return true
    // }},
}