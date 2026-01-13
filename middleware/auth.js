import crypto from 'crypto'

export const verifyTelegramAuth = (req, res, next) => {
  try {
    const { initData } = req.body
    if (!initData) return res.status(401).json({ error: 'Unauthorized' })
    const urlParams = new URLSearchParams(initData)
    const hash = urlParams.get('hash')
    urlParams.delete('hash')
    const dataCheckString = Array.from(urlParams.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, value]) => `${key}=${value}`)
      .join('\n')
    const secretKey = crypto.createHmac('sha256', 'WebAppData').update(process.env.TELEGRAM_BOT_TOKEN).digest()
    const calculatedHash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex')
    if (calculatedHash !== hash) return res.status(401).json({ error: 'Invalid auth data' })
    const user = JSON.parse(urlParams.get('user'))
    req.telegramUser = user
    next()
  } catch (error) {
    return res.status(401).json({ error: 'Auth verification failed' })
  }
}
