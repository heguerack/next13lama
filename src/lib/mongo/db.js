import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO)
      console.log('db connected')
    }
  } catch (error) {
    throw new Error('Connection failed')
  }
}
export default connectDB
