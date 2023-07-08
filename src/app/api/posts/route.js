import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongo/db'
import Post from '@/lib/models/Post'

export const GET = async (request) => {
  //to protect api routes
  const url = new URL(request.url)
  const username = url.searchParams.get('username')
  try {
    await connectDB()
    // const posts = await Post.find(username && { username })
    const posts = await Post.find(username && { username })
    console.log(posts)

    return new NextResponse(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    return new NextResponse(error, { status: 500 })
  }
}

export const POST = async (request) => {
  const body = await request.json()
  console.log(body)
  const newPost = new Post(body)
  console.log(newPost)
  try {
    await connectDB()
    console.log('connected to db')
    const res = await newPost.save()
    console.log(res)
    return new NextResponse(res, { status: 201 })
  } catch (err) {
    return new NextResponse(err, { status: 500 })
  }
}

// export const DELETE = async (request) => {
//   const url = new URL(request.url)
//   const username = url.searchParams.get('username')
//   try {
//     await connect()

//     const posts = await Post.find(username && { username })

//     return new NextResponse(JSON.stringify(posts), { status: 200 })
//   } catch (err) {
//     return new NextResponse('Database Error', { status: 500 })
//   }
// }
