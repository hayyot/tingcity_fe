/**
 * 设置token到本地存储
 * @param token
 */
export const setToken = (token: string) => {
  try {
    uni.setStorageSync('token', token)
  } catch (e) {
    console.error('set token error', e)
  }
}

/**
 * 从本地获取token
 * @returns token
 */
export const getLocalToken = () => {
  try {
    return uni.getStorageSync('token')
  } catch (e) {
    console.error('get token error', e)
  }
  return ''
}
