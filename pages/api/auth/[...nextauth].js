import CredentialsProvider from "next-auth/providers/credentials"
import prisma from '../../../lib/prisma'
import NextAuth from "next-auth"
import {verifyPassword} from '../../../lib/auth'



export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        const {email, password} = credentials

        const user = await prisma.user.findUnique({
          where: {
            email
          }
        })

        if(!user) {
          throw new Error("Invalid username")
        }

        if(!(await verifyPassword(password, user.password))) {
          throw new Error("Invalid password")
        }

        return user
      }
    })
  ],
  session: {
    strategy: "jwt"
  }
})