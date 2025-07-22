import express from "express";
import dotenv from "dotenv"
dotenv.config()

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
const app = express()


app.use(express.json())

app.use("/api/product", productRoutes)


app.listen(3001, () => {
  connectDB()
  console.log(`server is running on the PORT 3001`)
  console.log(process.env.MONGO_URI)
})
// u9OTJ1099qhZ1utw