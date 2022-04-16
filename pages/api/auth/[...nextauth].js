import CredentialsProvider from "next-auth/providers/credentials"
import prisma from '../../../lib/prisma'
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import NextAuth from "next-auth"


export default NextAuth({
 //adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        console.log(credentials)
        return {credentials}
      }
    })
  ],
  session: {
    jwt: true
  }
})