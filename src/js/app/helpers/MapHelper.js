class MapHelper {
  constructor() {
    
  }

  static validIp(value) {
    return /^[\d]{1,}\.[\d]{1,}\.[\d]{1,}\.[\d]{1,}$/.test(value)    
  }

  static formatAddress(location) {
    return `${location.city}, ${location.country} ${location.postalCode}`
  }
}