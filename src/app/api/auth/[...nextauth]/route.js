import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import connectDB from '@/lib/mongo/db'
import User from '@/lib/models/User'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        //Check if the user exists.
        await connectDB()

        try {
          const user = await User.findOne({
            email: credentials.email,
          })

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            )

            if (isPasswordCorrect) {
              return user
            } else {
              throw new Error('Wrong Credentials!')
            }
          } else {
            throw new Error('User not found!')
          }
        } catch (err) {
          throw new Error(err)
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    error: '/dashboard/login',
  },
})

export { handler as GET, handler as POST }

// import { User } from '@/lib/models/User'
// import connectDB from '@/lib/mongo/db'
// import NextAuth from 'next-auth'
// import GoogleProvider from 'next-auth/providers/google'
// import CredentialsProvider from 'next-auth/providers/credentials'
// // export default NextAuth({
// const handler = NextAuth({
//   // Configure one or more authentication providers

//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       id: 'credentials',
//       name: 'Credentials',
//       async authorize(credentials) {
//         await connectDB()
//         try {
//           const user = await User.findOne({
//             email: credentials.email,
//           })
//           if (user) {
//             //check password
//             const isPasswordCorrect = await bcrypt.compare(
//               credentials.password,
//               user.password
//             )
//             if (isPasswordCorrect) {
//               return user
//             } else {
//               throw new Error('wrong credentials')
//             }
//           }
//         } catch (error) {
//           throw new Error('user not found')
//         }
//       },
//     }),
//     // ...add more providers here
//   ],
//   pages: {
//     // this will show the error, irght in the url
//     error: '/dashboard/login',
//   },
// })

// // this cuz we will pass our username and psasword= post , and when we fetch = GET
// export { handler as GET, handler as POST }
