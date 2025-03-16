import NextAuth from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib/prisma'

export const { 
  handlers: { GET, POST },
  auth,
  signIn,
  signOut 
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    // 这里添加认证提供者，例如 GitHub
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    }
  }
})