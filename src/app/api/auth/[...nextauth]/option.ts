import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email: user.email || ''
        }
      })

      if (existingUser) {
        console.log('Login User')
        console.log(existingUser)
        await prisma.user.update({
          where: {
            email: user.email || ''
          },
          data: {
            updatedAt: new Date(),
            image: user.image,
          }
        })
        return true
      }

      const data = {
        name: user.name || '',
        email: user.email || '',
        image: user.image,
        role: 'user',
      }

      const newUser = await prisma.user.create({
        data,
      })

      console.log('New User')
      console.log(newUser)

      return true
    },
    async redirect({ url, baseUrl }) {
      return '/'
    },
    async session({ session, token, user }) {
      console.log(session, token, user)
      const data = await prisma.user.findFirst({
        where: {
          email: session.user?.email || ''
        },
      })

      if (session && session.user) {
        session.user.role = data?.role
        session.user.uId = data?.uId
      }

      return session
    }
  },
}
