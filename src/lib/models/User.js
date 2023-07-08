import { model, models, Schema } from 'mongoose'

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

// export const User = models.User || model('User', userSchema)
//If the User collection does not exist create a new one.
export default models.User || model('User', userSchema)
