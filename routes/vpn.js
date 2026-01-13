import express from 'express'
import User from '../models/User.js'
import VPNGenerator from '../services/vpnGenerator.js'
import { verifyTelegramAuth } from '../middleware/auth.js'

const router = express.Router()

router.post('/config', verifyTelegramAuth, async (req, res) => {
  try {
    const telegramId = req.telegramUser.id.toString()
    let user = await User.findOne({ telegramId })
    if (!user) {
      const uuid = VPNGenerator.generateUUID()
      const referralCode = Math.random().toString(36).substr(2, 8).toUpperCase()
      user = new User({ telegramId, firstName: req.telegramUser.first_name, uuid, referralCode })
      await user.save()
    }
    if (!user.isActive) return res.status(403).json({ error: 'Подписка не активна' })
    if (!user.vpnLink) {
      user.vpnLink = VPNGenerator.generateVLESS(user.telegramId, user.uuid)
      user.vpnConfig = VPNGenerator.generateSubscriptionLink(user.telegramId, user.uuid)
      await user.save()
    }
    res.json({
      vpnLink: user.vpnLink,
      subscriptionLink: user.vpnConfig,
      deeplinks: {
        android: VPNGenerator.generateAndroidDeeplink(user.vpnLink),
        ios: VPNGenerator.generateiOSDeeplink(user.vpnLink)
      }
    })
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
})

export default router
