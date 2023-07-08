import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongo/db'
import Post from '@/lib/models/Post'
// import Post from '@/models/Post'

export const GET = async (request, { params }) => {
  const { id } = params
  try {
    await connectDB()
    // const posts = await Post.find(username && { username })
    const post = await Post.findById(id)

    return new NextResponse(JSON.stringify(post), { status: 200 })
  } catch (error) {
    return new NextResponse(error, { status: 500 })
  }
}
