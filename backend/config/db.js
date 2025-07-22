import { connect } from "mongoose"

export const connectDB = async  () => {
  try {
    const conn = await connect(process.env.MONGO_URI)
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}