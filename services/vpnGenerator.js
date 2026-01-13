import { v4 as uuidv4 } from 'uuid'

class VPNGenerator {
  static generateVLESS(userId, uuid) {
    const serverIP = process.env.VPN_SERVER_IP || '45.123.45.67'
    const serverPort = process.env.VPN_SERVER_PORT || '443'
    const serverPath = process.env.VPN_SERVER_PATH || '/vless'
    return `vless://${uuid}@${serverIP}:${serverPort}?encryption=none&security=tls&sni=${serverIP}&type=ws&path=${serverPath}&host=${serverIP}#D-VPN-User-${userId}`
  }
  static generateSubscriptionLink(userId, uuid) {
    const baseURL = process.env.BASE_URL || 'https://your-domain.com'
    return `${baseURL}/sub/${userId}/${uuid}`
  }
  static generateUUID() {
    return uuidv4()
  }
  static generateAndroidDeeplink(vlessLink) {
    return `v2rayng://install-config?url=${encodeURIComponent(vlessLink)}`
  }
  static generateiOSDeeplink(vlessLink) {
    return `shadowrocket://add/${encodeURIComponent(vlessLink)}`
  }
}

export default VPNGenerator
