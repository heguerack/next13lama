// import bcrypt from 'bcryptjs'
import bcrypt from 'bcryptjs'
// import { User } from '@/lib/models/User'
import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongo/db'
import User from '@/lib/models/User'

export const POST = async (request) => {
  const { name, email, password } = await request.json()

  await connectDB()
  console.log('db connected')

  const hashedPassword = await bcrypt.hash(password, 5)

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  })
  console.log(newUser)
  try {
    const res = await newUser.save()
    console.log(res.status)
    return new NextResponse('User has been created', {
      status: 201,
    })
  } catch (err) {
    return new NextResponse(err, {
      status: 500,
    })
  }
}
