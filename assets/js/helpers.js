import CryptoJs from 'crypto-js'

class Helpers {
  // 测试功能
  test(str) {
    console.log(`This is a helpers's test ===> ${str}`)
  }

  // 是否为空对象
  isEmptyObject(obj) {
    return Object.keys(obj).length === 0
  }

  // 克隆对象
  cloneObject(obj) {
    // Handle the 3 simple types, and null or undefined
    if (obj === null || typeof obj !== 'object') return obj

    // Handle Date
    if (obj instanceof Date) {
      const copy = new Date()
      copy.setTime(obj.getTime())
      return copy
    }

    // Handle Array
    if (obj instanceof Array) {
      const copy = []
      for (let i = 0, len = obj.length; i < len; ++i) {
        copy[i] = this.cloneObject(obj[i])
      }
      return copy
    }

    // Handle Object
    if (obj instanceof Object) {
      const copy = {}
      for (const attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = this.cloneObject(obj[attr])
      }
      return copy
    }

    throw new Error("Unable to copy obj! Its type isn't supported.")
  }

  // 将字符串转换为base64字符串
  base64Encode(str) {
    return CryptoJs.enc.Base64.stringify(CryptoJs.enc.Utf8.parse(str))
  }

  base64Decode(base64) {
    return CryptoJs.enc.Utf8.stringify(CryptoJs.enc.Base64.parse(base64))
  }
}

export default new Helpers()
