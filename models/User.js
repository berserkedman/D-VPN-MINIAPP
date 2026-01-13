import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  telegramId: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  username: String,
  vpnConfig: String,
  vpnLink: String,
  uuid: { type: String, unique: true },
  subscriptionType: { type: String, enum: ['free', 'trial', 'paid'], default: 'free' },
  subscriptionEnd: Date,
  isActive: { type: Boolean, default: false },
  referralCode: { type: String, unique: true },
  referredBy: { type: String, default: null },
  referralCount: { type: Number, default: 0 },
  referralEarnings: { type: Number, default: 0 },
  isAdmin: { type: Boolean, default: false },
  isBlocked: { type: Boolean, default: false },
  balance: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  lastActive: { type: Date, default: Date.now }
})

export default mongoose.model('User', userSchema)
