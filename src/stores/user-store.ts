// store示例文件
import { reqGetUserInfo } from '@/api/user-api'

export default defineStore('user', () => {
  /** 用户信息 */
  const userInfo = ref<UserInfo>({
    id: '',
    username: '',
    avatar: '',
  })

  /** 获取用户信息 */
  const getUserInfo = async () => {
    const res = await reqGetUserInfo()
    userInfo.value = {
      ...userInfo.value,
      ...res?.data as AnyObject || {},
    }
  }

  return {
    userInfo,
    getUserInfo,
  }
})
