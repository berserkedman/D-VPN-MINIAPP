import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import vpnRoutes from './routes/vpn.js'
import referralRoutes from './routes/referral.js'
import subscriptionRoutes from './routes/subscription.js'
import adminRoutes from './routes/admin.js'
import authRoutes from './routes/auth.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Connect to DB
connectDB()

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/vpn', vpnRoutes)
app.use('/api/referral', referralRoutes)
app.use('/api/subscription', subscriptionRoutes)
app.use('/api/admin', adminRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() })
})

app.listen(PORT, () => {
  console.log(`✅ Backend запущен на порту ${PORT}`)
})
