class MapHelper {
  constructor() {
    
  }

  static validIp(value) {
    return /^[\d]{1,}\.[\d]{1,}\.[\d]{1,}\.[\d]{1,}$/.test(value) || /^www\.[a-z0-9]/.test(value) 
  }

  static domainOrIp(value) {
    if (/^www\.[a-z0-9]/.test(value)) {
      return 'domain'
    } else if (/^[\d]{1,}\.[\d]{1,}\.[\d]{1,}\.[\d]{1,}$/.test(value)){
      return 'ipAddress'
    }
  }

  static formatAddress(location) {
    return `${location.city}, ${location.country} ${location.postalCode}`
  }
}